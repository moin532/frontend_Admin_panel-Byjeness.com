import {
  ALL_PRODUCTS_FAILURE,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  CLEAR_ERRORS,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  ORDER_FAILURE,
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAILURE,
  ALL_SELLER_FAILURE,
  ALL_SELLER_REQUEST,
  ALL_SELLER_SUCCESS,
  ALL_BUYER_REQUEST,
  ALL_BUYER_SUCCESS,
  ALL_BUYER_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILURE,
} from "../constant/AllConstant";
import axios from "axios";

import { URL } from "../Store";

const token = JSON.parse(localStorage.getItem("userToken"));

const config = {
  headers: {
    Authorization: `${token}`,
  },
};

export const AllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    const token = JSON.parse(localStorage.getItem("userToken"));

    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:4000/api/v1/admin/products",
      config
    );

    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const UserLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json ",
      },
    };

    const { data } = await axios.post(
      `${URL}/login`,
      { email, password },
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userToken", JSON.stringify(data.token));
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const LoadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get("http://localhost:4000/api/v1/me", config);
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAILURE, payload: error.response.data.message });
  }
};

export const ALLOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ORDER_REQUEST });

    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

    const { data } = await axios.get(`${URL}/admin/orders`, config);

    dispatch({
      type: ORDER_SUCCESS,
      payload: data.Orders,
    });
  } catch (error) {
    dispatch({ type: ORDER_FAILURE, payload: error.response.data.message });
  }
};

export const AllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });

    const { data } = await axios.get(
      "http://localhost:4000/api/v1/admin/users",
      config
    );

    dispatch({
      type: ALL_USERS_SUCCESS,
      payload: data.allUsers,
    });
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const AllSeller = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SELLER_REQUEST });

    const { data } = await axios.get(
      "http://localhost:4000/api/v1/admin/Seller",
      config
    );

    dispatch({
      type: ALL_SELLER_SUCCESS,
      payload: data.allSeller,
    });
  } catch (error) {
    dispatch({
      type: ALL_SELLER_FAILURE,
      payload: error.response.message,
    });
  }
};

export const AllBuyers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BUYER_REQUEST });

    const { data } = await axios.get(
      "http://localhost:4000/api/v1/admin/buyer",
      config
    );

    dispatch({
      type: ALL_BUYER_SUCCESS,
      payload: data.buyer,
    });
  } catch (error) {
    dispatch({
      type: ALL_BUYER_FAILURE,
      payload: error.response.message,
    });
  }
};


export const deletePrd = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST});
 
    const { data } = await axios.delete(
      `http://localhost:4000/api/v1/admin/product/${id}`,
      config 
    );

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAILURE,
      payload: error.response.message,
    });
  }
};

export const PrdDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST});

    const { data } = await axios.get(
      `http://localhost:4000/api/v1/admin/product/${id}`,
      config
    );

    
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILURE,
      payload: error.response.message,
    });
  }
};



export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
