import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import { actAddApiProducts, actEditProducts, actUpProductsRequest, showApiCategories } from '../../../Actions/admin/ActionAdmin'


class ProductsActionPage extends Component {
    constructor(props) {
        super(props)
        this.txtname = React.createRef();   //lay value cua input va check value cua input
        this.txtimg = React.createRef();   //lay value cua input va check value cua input
        this.txtprice = React.createRef();   //lay value cua input va check value cua input
        this.txtinventory = React.createRef();   //lay value cua input va check value cua input
        this.txtselreview = React.createRef();   //lay value cua input va check value cua input
        this.txtdescription = React.createRef();   //lay value cua input va check value cua input
        this.txtloaispId = React.createRef();   //lay value cua input va check value cua input
        this.state = {
            id: '',
            name: '',
            img: '',
            price: '',
            inventory: '',
            review: '',
            description: '',
            loaispId: '',
        };
    }
    //sử dụng lifecycle để lấy dữ liệu
    componentDidMount() {
        var { match } = this.props;
        // console.log(this.props.match.params);
        if (match.params.id) {
            var id = match.params.id;
            this.props.editProductsAdmin(id);
        }
        this.props.showApiCategoriesOfProduct()
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        if (nextProps && nextProps.EditProductsItem) {
            var { EditProductsItem } = nextProps;
            this.setState({
                id: EditProductsItem.id,
                name: EditProductsItem.name,
                img: EditProductsItem.img,
                price: EditProductsItem.price,
                inventory: EditProductsItem.inventory,
                review: EditProductsItem.review,
                description: EditProductsItem.description,
                loaispId: EditProductsItem.loaispId,
            })
        }
    }
    onSaveProduct = (e) => {
        e.preventDefault();
        var { id } = this.state;
        var txtname = this.txtname.current.value;
        var txtimg = this.txtimg.current.value;
        var txtprice = this.txtprice.current.value;
        var txtinventory = this.txtinventory.current.value;
        var txtselreview = this.txtselreview.current.value;
        var txtdescription = this.txtdescription.current.value;
        var txtloaispId = this.txtloaispId.current.value;
        var products = {
            id,
            name: txtname,
            img: txtimg,
            price: txtprice,
            inventory: txtinventory,
            review: txtselreview,
            description: txtdescription,
            loaispId: txtloaispId,
        }
        let { history } = this.props
        if (id) {
            this.setState({
                name: txtname,
                img: txtimg,
                price: txtprice,
                inventory: txtinventory,
                review: txtselreview,
                description: txtdescription,
                loaispId: txtloaispId,
            });
            this.props.updateProductsAdmin(products)
        } else {
            this.setState({
                name: txtname,
                img: txtimg,
                price: txtprice,
                inventory: txtinventory,
                review: txtselreview,
                description: txtdescription,
                loaispId: txtloaispId,
            });
            this.props.addProductsAdmin(products);
        }
        history.goBack();


    }
    render() {
        // let { categories } = this.props
        // console.log(this.props.EditProductsItem);
        // console.log(this.state);
        return (
            <div className="div-from-products">
                <h3 style={{ textAlign: "center" }}>Form Products</h3>
                <form className="from_Products " onSubmit={this.onSaveProduct}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Name</span>
                        </div>
                        <input
                            ref={this.txtname}
                            type="text"
                            className="form-control form-control"
                            defaultValue={this.props.EditProductsItem.name}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Image</span>
                        </div>
                        <input
                            ref={this.txtimg}
                            type="text"
                            className="form-control form-control"
                            defaultValue={this.props.EditProductsItem.img}
                        />
                    </div>
                    <div className="input-group mb-3 pr">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Price</span>
                        </div>
                        <input
                            ref={this.txtprice}
                            type="number"
                            className="form-control form-control "
                            defaultValue={this.props.EditProductsItem.price}
                        />
                    </div>
                    <div className="input-group mb-3 pr">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Inventory</span>
                        </div>
                        <input
                            ref={this.txtinventory}
                            type="number"
                            className="form-control form-control"
                            defaultValue={this.props.EditProductsItem.inventory}
                        />
                    </div>
                    <div className="input-group mb-3 pr">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Review</span>
                        </div>
                        <select
                            ref={this.txtselreview}
                            className="form-control"
                            id="sel4">
                            <option value={this.props.EditProductsItem.review}>{this.props.EditProductsItem.review}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Description</span>
                        </div>
                        {/* <textarea className="form-control" rows={5} id="comment" defaultValue={""} /> */}
                        <Editor
                            ref={this.txtdescription}
                            initialValue={this.props.EditProductsItem.description}
                            onChange={this.handleEditorChange}
                            apiKey='y33wnkupp4d7u4x4tdhfth0n6gs2nugxt73e38gn4cn0fp20'
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar:
                                    'undo redo | formatselect | bold italic backcolor | \n' +
                                    'alignleft aligncenter alignright alignjustify | \n' +
                                    ' bullist numlist outdent indent | removeformat |'
                            }}
                        />
                    </div>
                    <div className="input-group mb-3 pr">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Categories</span>
                        </div>
                        <select
                            ref={this.txtloaispId}
                            defaultValue={this.props.EditProductsItem.loaispId}
                            className="form-control"
                            id="sel1">
                            {this.showCategories(this.props.CetegoriesOfProduct)}
                        </select>
                    </div>

                    <div className="btn-products">
                        <button
                            type="submit"
                            className="btn btn-primary mb-2 mr-10"
                        >Lưu
                        </button>
                        <Link
                            to="/admin/productlist"
                            className="btn btn-primary mb-2"
                        >Hủy
                        </Link>
                    </div>

                </form>
            </div>
        )
    }
    showCategories(categories) {
        var result = null;
        if (categories.length > 0) {
            result = categories.map((categories, index) => {
                return <option
                    key={index}
                    value={categories.id}>
                    {categories.name}
                </option>
            });
        }
        return result;
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        EditProductsItem: state.EditProductsItem,
        CetegoriesOfProduct: state.CategoriesReducerAdmin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addProductsAdmin: (products) => {
            dispatch(actAddApiProducts(products))
        },
        editProductsAdmin: (id) => {
            dispatch(actEditProducts(id))
        },
        updateProductsAdmin: (products) => {
            dispatch(actUpProductsRequest(products))
        },
        showApiCategoriesOfProduct: () => {
            dispatch(showApiCategories())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsActionPage)