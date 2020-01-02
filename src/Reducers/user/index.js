import { combineReducers } from 'redux';
import productsReducer from './ProductReducer';
import CartReducer from './CartReducer';
import CategoriesReducerAdmin from '../admin/CategoriesReducerAdmin';
import categoriesReducer from '../user/CategoriesReducer';
import EditItem from '../admin/EditItem';
import UserReducer from '../user/UserReducer';
import BillReducer from './BillReducers';
import ProfileReducer from './ProfileReducer';
import ProductsReducerAdmin from '../admin/ProductsReducerAdmin';
import EditProductsItem from '../admin/EditProductsItem';
import AccoutReducerAdmin from '../admin/AccoutReducer';
import BillReducerAdmin from '../admin/BillReducerAdmin';
import EditBillAdmin from '../admin/EditBillAdmin';
import LoginAdminReducer from '../admin/loginAdminReducer';


const appReducers = combineReducers({
    productsReducer,
    CartReducer,
    CategoriesReducerAdmin,
    EditItem,
    categoriesReducer,
    UserReducer,
    ProfileReducer,
    BillReducer,
    ProductsReducerAdmin,
    EditProductsItem,
    AccoutReducerAdmin,
    BillReducerAdmin,
    EditBillAdmin,
    LoginAdminReducer
    
})
export default appReducers;