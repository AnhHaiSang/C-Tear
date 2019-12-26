import * as Types from '../../Constants/user/ActionTypes';
import ApiCall from '../../utils/ApiCall';

//show product
export const showapiproduct = () => {
    return dispatch => {
        return ApiCall(`products?_page=1`, 'GET', null).then(res => {
            dispatch(showproduct(res.data));
        });
    };// hàm này khi được gọi lên sẽ đến products trong server -> thông qua phương thức GET -> truyền res.data(thông số của sản phẩm ở trên server) cho hàm showproduct
}

export const showproduct = (products) => {
    return {
        type : Types.SHOWPRODUCT,
        products //khi được truyền hàm sẽ show các thông số của products (res.data)
    }
}   

//get du lieu qua detail-----------------------------------------------------------
export const GetApiDetails = (id)=>{
    return dispatch => {
        return ApiCall(`products/${id}`, 'GET', null).then(res => {
            dispatch(GetProductDetail(res.data));
        }); 
    };
}//hàm này sẽ lấy dữ liệu của sản phẩm được chọn thông qua dấu `...` (http://localhost:3000/products/{id})

export const GetProductDetail = (products) =>{
    return{
        type: Types.GET_PRODUCT_DETAIL, 
        products
    }
}

//categories---------------------------------------------------------------------
export const GetApiCatgories = (id)=>{
    return dispatch => {
        return ApiCall(`loaisp/${id}/products?_start=1&_limit=4`, 'GET', null).then(res => {
            dispatch(GetProductCategories(res.data));
        });
    };
}

export const GetProductCategories = (categories) =>{
    return{
        type: Types.GET_PRODUCT_CATEGORIES,
        categories
    }
}

//----------------------------------------------------------------//
export const AddToCart = (product,count) =>{
    return{
        type: Types.ADD_TO_CART,
        product,
        count,
    }
} 

export const DelToCart = (product) => {
    return{
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

//add user 
export const addUserAPI = (users) => {
    return dispatch => {
        ApiCall(`users`,'POST',users).then(res=>{
            dispatch(addUsers(res.data))
        })
    }
}

export const addUsers = (users) => {
    return {
        type : Types.ADDUSER,
        users
    }
}

//get user api 
export const GetUserApi = () => {
    return dispatch => {
        ApiCall(`users`,'GET',null).then(res=>{
            dispatch(getuser(res.data))
        })
    }
}
export const getuser = (users) => {
    return {
        type : Types.GETAPIUSER,
        users
    }
}

//get profile
export const getprofileAPI= value=>{
    return dispatch=> {
        ApiCall(`users?email=${value}`,'GET',null).then(res=>{
            dispatch( GetProfile(res.data))// request data từ server
        })
    }
}
export const GetProfile=(profile)=>{
    return {
        type: Types.GETPROFILE,
        profile
    }
}

//add order
export const addOrderAPI = bill => {
    return dispatch => {
        ApiCall(`orders`,'POST',bill).then(res=>{
            dispatch(addorder(res.data))
        })
    }
}

export const addorder = bill =>{
    return {
        type : Types.ADDAPIORDER,
        bill
    }
}

//get bill history
export const GetbillAPI = bill =>{
    return dispatch=>{
        ApiCall(`orders?information.email=${bill}`,'GET',null).then(res=>{
            dispatch(getbill(res.data))
        })
    }
}
export const getbill = bill =>{
    return{
        type: Types.GETBILLHISTORY,
        bill
    }
}

