import React from 'react';
import ListsProduct from '../../Components/user/lists_product'
import { connect } from 'react-redux';

// container trung gian giữa redux và conponents, container sẽ lấy data ở store
// container thực hiện nhiệm vụ kết nối (vd mapStateToProps)
// sau đó container sẽ truyền data vào components 


class ProductsContainer extends React.Component {
    render() {
        var {products} = this.props; // console.log(products);
        return (
            <div>
                {/* conponent danh sách sản phẩm */}
               <ListsProduct products={products}/> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.productsReducer  //(productsReducer) trong file index trong reducer
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);
