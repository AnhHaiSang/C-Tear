import { combineReducers } from 'redux';
import productsReducer from './ProductReducer';
import CartReducer from './CartReducer';
import CategoriesReducerAdmin from '../admin/CategoriesReducerAdmin';
import ProductsReducerAdmin from '../admin/ProductsReducerAdmin';
import EditItem from '../admin/EditItem';
import EditProductsItem from '../admin/EditProductsItem';


const appReducers = combineReducers({
    productsReducer,
    CartReducer,
    CategoriesReducerAdmin,
    EditItem,
    ProductsReducerAdmin,
    EditProductsItem
    
})
export default appReducers;