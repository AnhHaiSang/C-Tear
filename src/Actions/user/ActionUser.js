import * as Types from '../../Constants/user/ActionTypes';
import ApiCall from '../../utils/ApiCall';

//show product
export const showapiproduct = () => {
    return dispatch => {
        return ApiCall('products', 'GET', null).then(res => {
            dispatch(showproduct(res.data));
        });
    };
}

export const showproduct = (products) => {
    return {
        type : Types.SHOWPRODUCT,
        products
    }
}
//get du lieu qua detail
export const GetApiDetails = (id)=>{
    return dispatch => {
        return ApiCall(`products/${id}`, 'GET', null).then(res => {
            dispatch(GetProductDetail(res.data));
        });
    };
}

export const GetProductDetail = (products) =>{
    return{
        type: Types.GET_PRODUCT_DETAIL,
        products
    }
}
//categories
export const GetApiCatgories = (id)=>{
    return dispatch => {
        return ApiCall(`loaisp/${id}/products`, 'GET', null).then(res => {
            dispatch(GetProductCategories(res.data));
        });
    };
}

export const GetProductCategories = (products) =>{
    return{
        type: Types.GET_PRODUCT_CATEGORIES,
        products
    }
}


export const AddToCart = (product, total) =>{
    return{
        type: Types.ADD_TO_CART,
        product,
        total
    }
} 

export const DauCong = (product, total) => {
    return{
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        total
    }
}