import { combineReducers } from 'redux';
import productsReducer from './ProductReducer';
import CartReducer from './CartReducer';
import CategoriesReducerAdmin from '../admin/CategoriesReducerAdmin';

const appReducers = combineReducers({
    productsReducer,
    CartReducer,
    CategoriesReducerAdmin,
    
})
export default appReducers;