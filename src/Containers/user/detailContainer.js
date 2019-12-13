import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../Actions/user/ActionUser';
import ProductDetailLists from '../../Components/user/productDetailList';
import ProductDetail from '../../Components/user/productDetail';

// container trung gian giữa redux và conponents, container sẽ lấy data ở store
// container thực hiện nhiệm vụ kết nối (vd mapStateToProps)
// sau đó container sẽ truyền data vào components 


class DetailContainer extends React.Component {
    componentDidMount(){
        let {match} = this.props;
        if(match) {
            let id = match.params.id;
            this.props.Getdetails(id);
        }
    }
    render() {
        var {products} = this.props;
        
        if(true){
            console.log("abc");
        }
        console.log(this.props)
        return (
            <div>
    
                <ProductDetail>
                    <ProductDetailLists products={products}/>
                
               </ProductDetail>
            </div>
        )
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
        },
        Getdetails: (id) => {
            dispatch(action.GetApiDetails(id))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
