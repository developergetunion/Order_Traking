import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESSFUL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECRESS_QTY,
  CREATE_USER_START,
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESSFUL,
  GET_USER_START,
  GET_USER_SUCCESSFUL,
  GET_USER_ERROR,
} from './actionType';

const INITIAL_STATE = {
  loading: false,
  product: [],
  errors: null,
  cart: [],
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
    case GET_USER_START:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case GET_USER_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case CREATE_USER_SUCCESSFUL:
      return {
        ...state,
        loading: false,
      };
    case CREATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_ERROR:
    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case ADD_TO_CART:
      const item = state.product.find(prod => prod.id === action.payload.id);

      const inCart = state.cart.find(item =>
        item.id === action.payload.id ? true : false,
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map(item =>
              item.id === action.payload.id
                ? {...item, qty: item.qty + 1}
                : item,
            )
          : [...state.cart, {...item, qty: 1}],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case INCREASE_QTY:
      let tempCartInc = state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          return {...cartItem, qty: cartItem.qty + 1};
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCartInc,
        // cart: state.cart.find(pro => pro.id === action.payload.id +1)
      };
    case DECRESS_QTY:
      tempCartDec = state.cart
        .map(cartItem => {
          if (cartItem.id === action.payload.id) {
            return {...cartItem, qty: cartItem.qty - 1};
          }
          return cartItem;
        })
        .filter(cartItem => cartItem.qty !== 0);
      return {
        ...state,
        cart: tempCartDec,
      };
    default:
      return state;
  }
};

export default reducers;
