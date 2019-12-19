import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../Actions/user/ActionUser';
import ProductDetailLists from '../../Components/user/productDetailList';
import ProductDetail from '../../Components/user/productDetail';
import ProductDetailCategories from '../../Components/user/productDetailCategories';

// container trung gian giữa redux và conponents, container sẽ lấy data ở store
// container thực hiện nhiệm vụ kết nối (vd mapStateToProps)
// sau đó container sẽ truyền data vào components 


class DetailContainer extends React.Component {
    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let id = match.params.id;
            this.props.Getdetails(id);
        };
    }
    render() {
        var { products, categories ,addtocart,history} = this.props;
        // chèn thêm 1 bảng ở api vào component
        // vì nó lấy theo products.loaispId 
        // nên ta phải có được props.products rồi mới get vào id
        // ko nên bỏ nó vào componentDidMount vì ở trong đó không có props.products
        this.props.GetCategories(products.loaispId);
        // console.log(this.showcategorie(categories));

        return (
            <div>
                <ProductDetail>
                    <ProductDetailLists products={products} addtocart={addtocart} history={history}/>                
                    <ProductDetailCategories products={products} categories={categories} />
                </ProductDetail>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.productsReducer,
        categories: state.categoriesReducer  //(productsReducer) trong file index trong reducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addtocart: (product, total) => {
            dispatch(action.AddToCart(product, total))
        },
        Getdetails: (id) => {
            dispatch(action.GetApiDetails(id))
        },
        GetCategories: (id) => {
            dispatch(action.GetApiCatgories(id))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
