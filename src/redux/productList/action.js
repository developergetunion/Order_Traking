import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESSFUL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECRESS_QTY,
  CREATE_USER_START,
  CREATE_USER_SUCCESSFUL,
  CREATE_USER_ERROR,
  GET_USER_START,
  GET_USER_SUCCESSFUL,
  GET_USER_ERROR,
} from './actionType';

export const getProducts = () => ({
  type: GET_ALL_PRODUCTS,
});

export const getProductsSuccessful = product => ({
  type: GET_PRODUCTS_SUCCESSFUL,
  payload: product,
});

export const productError = error => ({
  type: GET_PRODUCTS_ERROR,
  payload: error,
});

export const createUserStart = user => ({
  type: CREATE_USER_START,
  payload: user,
});

export const createUserSuccessful = () => ({
  type: CREATE_USER_SUCCESSFUL,
});

export const createUserError = error => ({
  type: CREATE_USER_ERROR,
  payload: error,
});

export const getUserDetails = () => ({
  type: GET_USER_START,
});

export const getUserDetailsSuccessful = users => ({
  type: GET_USER_SUCCESSFUL,
  payload: users,
});

export const getUserDetailsError = error => ({
  type: GET_USER_ERROR,
  payload: error,
});

export const addToCart = itemId => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromCart = itemId => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const increaseQty = itemId => {
  return {
    type: INCREASE_QTY,
    payload: {
      id: itemId,
    },
  };
};

export const decressQty = itemId => {
  return {
    type: DECRESS_QTY,
    payload: {
      id: itemId,
    },
  };
};
