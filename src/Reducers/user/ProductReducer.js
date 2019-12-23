// var defaultState=[];
// export default function productsReducer (state, action) {
//     var newState={};
//     state = defaultState.productsData;
//     newState.state=state;
//     switch (action.type) {
//         case "GET_PRODUCT_DETAIL":    
//             let indexE = state.find((item)=>{
//                 return item.id == action.product.id
//             });
//             newState.state=state;
//             newState.indexE = indexE;
            
//             return  newState; 
//         default: 
//             return newState;
//     }
// }
import * as Types from '../../Constants/user/ActionTypes';
const ProductReducer = []
 const productsReducer = (state = ProductReducer, action) => {
    switch (action.type) {
        case Types.SHOWPRODUCT:
            state = action.products
            return [...state]
        case Types.GET_PRODUCT_DETAIL:
            
            return action.products;
        case Types.GET_PRODUCT_CATEGORIES:
            console.log(action.products);
            
            return state
        default:
            return state
    }
}
export default productsReducer;
