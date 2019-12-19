import { combineReducers } from 'redux';
import productsReducer from './ProductReducer';
import CartReducer from './CartReducer';
import CategoriesReducerAdmin from '../admin/CategoriesReducerAdmin';
import categoriesReducer from '../user/CategoriesReducer';
import EditItem from '../admin/EditItem';
import UserReducer from '../user/UserReducer';


const appReducers = combineReducers({
    productsReducer,
    CartReducer,
    CategoriesReducerAdmin,
    EditItem,
    categoriesReducer,
    UserReducer
    
})
export default appReducers;