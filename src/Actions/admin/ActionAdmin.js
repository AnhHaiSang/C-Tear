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

//xoa categories
export const actDelApiCategories = (id) => {
    return dispatch => {
        return ApiCall(`loaisp/${id}`, '', null).then(res => {
            dispatch(addCategories(res.data));
        });
    };
}

export const delCategories = (categories) => {
    return {
        type: Types.DELETE_PRODUCT_IN_SV,
        categories
    }
}



