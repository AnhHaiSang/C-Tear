import { combineReducers } from 'redux';
import productsReducer from './ProductReducer';
import CartReducer from './CartReducer';
// import Messages from './Messages';

const appReducers = combineReducers({
    productsReducer,
    CartReducer,
    // Messages
})
export default appReducers;