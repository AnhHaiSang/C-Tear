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



