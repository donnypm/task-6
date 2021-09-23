import {
  ADD_PRODUCTS,
  EDIT_PRODUCTS,
  DELETE_PRODUCTS,
  GET_PRODUCTS,
  PRODUCTS_ERROR,
} from "../reducers/types";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
};

export const addProduct = (productObj) => {
  return (dispatch) => {
    axios
      .post("https://fakestoreapi.com/products", productObj)
      .then((response) => {
        dispatch({
          type: ADD_PRODUCTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const editProduct = (productObj, id) => {
  return (dispatch) => {
    axios
      .put("https://fakestoreapi.com/products/" + id, productObj)
      .then((response) => {
        dispatch({
          type: EDIT_PRODUCTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    axios
      .delete("https://fakestoreapi.com/products/" + id)
      .then((response) => {
        dispatch({
          type: DELETE_PRODUCTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
