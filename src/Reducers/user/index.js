import { combineReducers } from 'redux';
import productsReducer from './ProductReducer';
import CartReducer from './CartReducer';
import CategoriesReducerAdmin from '../admin/CategoriesReducerAdmin';
import categoriesReducer from '../user/CategoriesReducer';
import EditItem from '../admin/EditItem';
import UserReducer from '../user/UserReducer';
import BillReducer from './BillReducers';
import ProfileReducer from './ProfileReducer';

const appReducers = combineReducers({
    productsReducer,
    CartReducer,
    CategoriesReducerAdmin,
    EditItem,
    categoriesReducer,
    UserReducer,
    ProfileReducer,
    BillReducer
    
})
export default appReducers;