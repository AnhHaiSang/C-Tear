import * as Types from '../../Constants/admin/TypeActionAdmin';
import ApiCall from '../../utils/ApiCall';

//show categories
export const showApiCategories = () => {
    return dispatch => {
        return ApiCall('loaisp', 'GET', null).then(res => {
            dispatch(showCategories(res.data));
        });
    };  
}
 
export const showCategories = (categories) => {
    return {
        type: Types.SHOWCATEGORIES, 
        categories
    }
}
//Add categories
export const actAddApiCategories = (categories) => {
    return dispatch => {
        return ApiCall('loaisp', 'POST', categories).then(res => {
            dispatch(addCategories(res.data));
        });
    };
}

export const addCategories = (categories) => {
    return {
        type: Types.ADD_TO_SV,
        categories
    }
}

//del categories

export const actDelApiCategories = (id) => {
    return dispatch => {
        return ApiCall(`loaisp/${id}`, 'DELETE', null).then( res => {
            dispatch(delCategories(id));
        });
    };
}
export const delCategories = (id) => {
    return {
        type: Types.DELETE_CATEGORIES_IN_SV,
        id
    }
}

// edit categories
export const actEditCategories = (id)=>{
    return dispatch =>{
        return ApiCall(`loaisp/${id}`, 'GET', null).then( res =>{
            dispatch(editCategories(res.data));
        });
    };
}
export const editCategories = (categories) => {
    return {
        type: Types.EDIT_CATEGORIES_IN_SV,
        categories 
    }
}
 
// update categories
export const actUpCategoriesRequest  = (categories) => {
    return dispatch => {
        return ApiCall (`loaisp/${categories.id}`, 'PUT', categories).then(res=>{
            dispatch(actUpCategories(res.data))
        })
    }
}


export const actUpCategories  = (categories) => {
    return {
        type : Types.UPDATE_CATEGORIES_IN_SV,
        categories
    }
}

// --------------------Product Action-------------
// show products
export const actShowProductsApi = () => {
    return dispatch => {
        return ApiCall('products', 'GET', null).then(res => {
            dispatch(showProducts(res.data));
        });
    };  
}

export const showProducts = (products) => {
    return {
        type: Types.SHOW_PRODUCTS, 
        products
    }
}

// add product in admin
export const actAddApiProducts = (products) => {
    return dispatch => {
        return ApiCall('products', 'POST', products).then(res => {
            dispatch(addProductsAdmin(res.data));
        });
    };
}

export const addProductsAdmin = (products) => {
    return{
        type: Types.ADD_PRODUCTS_TO_SV,
        products
    }
}

// delete product in admin
export const actDelApiProducts = (id) => {
    return dispatch => {
        return ApiCall(`products/${id}`, 'DELETE', null).then( res => {
            dispatch(delProducts(id));
        });
    };
}
export const delProducts = (id) => {
    return {
        type: Types.DELETE_PRODUCTS_IN_SV,
        id
    }
}
// edit products
export const actEditProducts = (id)=>{
    return dispatch =>{
        return ApiCall(`products/${id}`, 'GET', null).then( res =>{
            dispatch(editProducts(res.data));
        });
    };
}
export const editProducts = (products) => {
    return {
        type: Types.EDIT_PRODUCTS_IN_SV,
        products 
    }
}

// updete products
export const actUpProductsRequest  = (products) => {
    return dispatch => {
        return ApiCall (`loaisp/${products.id}`, 'PUT', products).then(res=>{
            dispatch(updateProducts(res.data))
        })
    }
}
export const updateProducts = (products) =>{
    return{
        type: Types.UPDATE_PRODUCTS_IN_SV,
        products
    }
}