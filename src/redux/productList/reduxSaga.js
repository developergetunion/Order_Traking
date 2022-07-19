import {takeLatest, put, call, fork, all, takeEvery} from 'redux-saga/effects';
import {
  CREATE_USER_START,
  GET_ALL_PRODUCTS,
  GET_USER_START,
  SEARCH_PRODUCT_START,
} from './actionType';
import {
  createUserError,
  createUserSuccessful,
  getProductsSuccessful,
  getUserDetailsError,
  getUserDetailsSuccessful,
  productError,
} from './action';
import {
  ProductApi,
  CreateUserApi,
  GetUserDetailsApi,
} from '../../api/ProductApi';

export function* onLoadProductsData() {
  try {
    const response = yield call(ProductApi);
    yield put(getProductsSuccessful(response.data.data));
  } catch (error) {
    yield put(productError(error));
  }
}

export function* onCreateUser({payload}) {
  try {
    const response = yield call(CreateUserApi, payload);
    yield put(createUserSuccessful(response.data));
  } catch (error) {
    yield put(createUserError(error));
  }
}

export function* onGetUserData() {
  try {
    const response = yield call(GetUserDetailsApi);
    yield put(getUserDetailsSuccessful(response.data.data));
  } catch (error) {
    yield put(getUserDetailsError(error));
  }
}

export function* onLoadProducts() {
  yield takeEvery(GET_ALL_PRODUCTS, onLoadProductsData);
}
export function* onCreateUserInfo() {
  yield takeLatest(CREATE_USER_START, onCreateUser);
}
export function* onGetUsers() {
  yield takeLatest(GET_USER_START, onGetUserData);
}

const orderSagas = [
  fork(onLoadProducts),
  fork(onCreateUserInfo),
  fork(onGetUsers),
];

export function* rootSaga() {
  yield all([...orderSagas]);
}
