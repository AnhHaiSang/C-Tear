import React from 'react';
import ListsProduct from '../../Components/user/lists_product';
import ProductLists from '../../Components/user/product_lists';
import { connect } from 'react-redux';
import * as action from '../../Actions/user/ActionUser';
import PropTypes from 'prop-types';

// container trung gian giữa redux và conponents, container sẽ lấy data ở store
// container thực hiện nhiệm vụ kết nối (vd mapStateToProps)
// sau đó container sẽ truyền data vào components 


class ProductsContainer extends React.Component {
    componentDidMount(){
        this.props.showProductsapi();
    }
    render() {
        var {products} = this.props;
        // console.log(this.props.products);
        
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
         let {addtocart , getproductdetail} =this.props;
         
        var result = null;
        if(products.length > 0 ){
            result = products.map((products, index) => {
                return  <li key={index} className="list-group-item">
                            <ListsProduct key={index} products={products} addtocart={addtocart} getproductdetail={getproductdetail}/>
                        </li>;
            });
        }
        return result;
    }
}


//check object trong products (cai state in ProductReducer)
ProductsContainer.propTypes ={
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            review: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            CategorieId: PropTypes.number.isRequired

        })
    ).isRequired
}

const mapStateToProps = (state) => {
    // console.log(state.productsReducer.state);
    return {
        products: state.productsReducer  //(productsReducer) trong file index trong reducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addtocart: (product,total) => {
            dispatch(action.AddToCart(product,total))
        },
        getproductdetail: (product) => {
            dispatch(action.GetProductDetail(product))
        },
        showProductsapi: ()=>{
            dispatch(action.showapiproduct())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
