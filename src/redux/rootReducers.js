import {combineReducers} from 'redux';
import reducers from './productList/reducers';

const rootReducers = combineReducers({
  product: reducers,
});

export default rootReducers;
