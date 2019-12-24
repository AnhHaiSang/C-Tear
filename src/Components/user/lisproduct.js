import React from 'react';
import { connect } from 'react-redux';
import ListsProduct from './lists_product';
import * as action from '../../Actions/user/ActionUser';
class LisProductView extends React.Component {
    componentDidMount(){
        this.props.showProductsapi();
    }
    render() {
        var {products} = this.props;
        // console.log(this.props.products);
        
        return (
            <div>
                {/* conponent danh sách sản phẩm */}
          
                {this.showProducts(products)}
               
            </div>
        )
    }
     // hàm này dùng để hiển thị danh sách sản phầm ở homepage
     showProducts(products) {  
        var result = null;
        if(products.length > 0 ){
            result = products.map((products, index) => {
                return  <li key={index} className="list-group-item">
                            <ListsProduct key={index} products={products}/>
                        </li>;
            });
        }
        return result;
    }
}



const mapStateToProps = (state) => {
    // console.log(state.productsReducer.state);
    return {
        products: state.productsReducer  //(productsReducer) trong file index trong reducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showProductsapi: ()=>{
            dispatch(action.showapiproduct()) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LisProductView)