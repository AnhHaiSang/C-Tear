import { combineReducers } from 'redux';
import productsReducer from './ProductReducer';


const appReducers = combineReducers({
    productsReducer
})
export default appReducers;