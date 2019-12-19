import { combineReducers } from 'redux';
import productsReducer from './ProductReducer';
import CartReducer from './CartReducer';
import CategoriesReducerAdmin from '../admin/CategoriesReducerAdmin';
import EditItem from '../admin/EditItem';

const appReducers = combineReducers({
    productsReducer,
    CartReducer,
    CategoriesReducerAdmin,
    EditItem
    
})
export default appReducers;