import {
  ADD_PRODUCTS,
  EDIT_PRODUCTS,
  DELETE_PRODUCTS,
  GET_PRODUCTS,
  PRODUCTS_ERROR,
} from "../reducers/types";
import { uid } from "uid";

const initialState = {
  products: [],
  loading: true,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case ADD_PRODUCTS:
      return {
        ...state,
        products: state.products.concat(action.payload),
        loading: false,
      };

    case EDIT_PRODUCTS:
      const editproducts = state.products.concat(action.payload);
      return { ...state, editproducts };

    case PRODUCTS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    case DELETE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
