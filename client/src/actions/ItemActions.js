import {GET_ITEMS, ADD_ITEM, ITEMS_LOADING} from "./types";
import axios from 'axios';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/items').then(res =>
    dispatch({
      type: GET_ITEMS,
      payload : {
        items: res.data
      }
    })
  )
};

export const addItem = name => dispatch => {

  const baseUrl = "https://itunes.apple.com/search?";
  const query = name.replace(/\s+/g,"+");
  const term = `term=${query}`;
  const media = '&media=musicVideo';
  const url = baseUrl + term + media;

  dispatch(setItemsLoading());
  axios.get(url)
    .then(results => {
      axios.post('/api/items', { name })
        .then(res =>{
          dispatch({
            type: ADD_ITEM,
            payload : {
              results: results.data.results,
              lastSearch: name
            }
          })}
        )
    });

};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

