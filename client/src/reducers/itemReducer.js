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
        loading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        resultItems: action.payload.results,
        showResults: true,
        loading: false
      };
    case ITEMS_LOADING:
      return {
        ...state,
        showSearched: false,
        showResults: false,
        loading: true
      };
    default:
      return state;
  }
}