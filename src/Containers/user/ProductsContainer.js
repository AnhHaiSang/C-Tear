import React from 'react';
import ListsProduct from '../../Components/user/lists_product';
import ProductLists from '../../Components/user/product_lists';
import { connect } from 'react-redux';
import * as action from '../../Actions/user/ActionUser';

// container trung gian giữa redux và conponents, container sẽ lấy data ở store
// container thực hiện nhiệm vụ kết nối (vd mapStateToProps)
// sau đó container sẽ truyền data vào components 


class ProductsContainer extends React.Component {
    render() {
        var {products} = this.props; // console.log(products);
        return (
            <div>
                {/* conponent danh sách sản phẩm */}
                <ProductLists>
                {this.showProducts(products)}
               </ProductLists>
            </div>
        )
    }
     // hàm này dùng để hiển thị danh sách sản phầm ở homepage
     showProducts(products) {
         let {addtocart} =this.props;
         
        var result = null;
        if(products.length > 0 ){
            result = products.map((products, index) => {
                return  <li key={index} className="list-group-item">
                            <ListsProduct key={index} products={products} addtocart={addtocart}/>
                        </li>;
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.productsReducer  //(productsReducer) trong file index trong reducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addtocart: (product,total) => {
            dispatch(action.AddToCart(product,total))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
