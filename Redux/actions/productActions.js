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
    console.log(res.data);
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
};

export const addProduct = (product) => async (dispatch) => {
  try {
    await axios
      .post(`https://fakestoreapi.com/products`, product)
      .then((response) => {
        dispatch({
          type: ADD_PRODUCTS,
          payload: response.data,
        });
        console.log(response);
      });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
};

export const editProduct = (product) => async (dispatch) => {
  try {
    await axios
      .put(`https://fakestoreapi.com/products/${product.id}`, product)
      .then((response) => {
        dispatch({
          type: EDIT_PRODUCTS,
          payload: response.data,
        });
        console.log(response);
      });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_PRODUCTS,
          payload: response.data,
        });
        console.log(response);
      });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: error,
    });
  }
};
