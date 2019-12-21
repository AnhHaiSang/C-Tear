import axios from 'axios';
import * as Config from '../Constants/APIConstans';

//nơi để kết nối API
//endpoint là đuôi URL
//Config.API_URL lấy từ file constants (địa chỉ của server)
//data là dữ liệu 

export default function ApiCall(endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};