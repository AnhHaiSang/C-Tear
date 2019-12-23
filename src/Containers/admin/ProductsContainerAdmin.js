import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../Components/admin/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import { actShowProductsApi, actDelApiProducts } from '../../Actions/admin/ActionAdmin';

class ProductsContainerAdmin extends Component {
    componentDidMount() {
        this.props.showProducts();
    }
    showProductsDb(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((products, index) => {
                return <ProductItem
                    key={index}
                    products={products}
                    index={index}
                    delProducts={this.props.delProducts}
                />
            });
        }
        return result;
    }
    render() {
        // console.log(this.props);
        return (
            <div className="col-sm-9 mt-10 free-size">
                <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Manage Product</h3>
                <Link
                    to="/admin/products/add"
                    className="btn btn-info mb-10">
                    Add
                </Link>
                <div className="panel panel-primary">
                    <div className="bg-primary text-white">
                        <h3 style={{ textAlign: "center", marginBottom: "0px" }}>
                            Lists Product
                            </h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>name </th>
                                    <th>img </th>
                                    <th>inventory</th>
                                    <th>review</th>
                                    <th>description</th>
                                    <th>loaispId</th>
                                    <th>Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showProductsDb(this.props.products)}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>


        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.ProductsReducerAdmin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showProducts: () => {
            dispatch(actShowProductsApi())
        },
        delProducts: (id) => {
            dispatch(actDelApiProducts(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainerAdmin);