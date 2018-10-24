import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING} from "../actions/types";

const initialState = {
  items: [],
  loading: false
};

export default function (state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload.items,
        loading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload.item, ...state.items]
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map( item => {return item._id === action.payload.item._id ? action.payload.item : item})
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter( item => item._id !== action.payload.id)
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