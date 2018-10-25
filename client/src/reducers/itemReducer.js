import {GET_ITEMS, ADD_ITEM, ITEMS_LOADING} from "../actions/types";

const initialState = {
  searchItems: [],
  showSearched: false,
  resultItems: [],
  showResults: false,
  loading: false
};

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        searchItems: action.payload.items,
        showSearched: true,
        showResults: false,
        loading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        resultItems: action.payload.results,
        showSearched: false,
        showResults: true,
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}