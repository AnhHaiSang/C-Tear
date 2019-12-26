import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showApiCategories, actDelApiCategories } from '../../Actions/admin/ActionAdmin';
import { Link } from 'react-router-dom';
import CategoriesItem from '../../Components/admin/CategoriesItem/CategoriesItem';

class CategoriesContainer extends Component {
    componentDidMount() {
        this.props.showCategories();
    }
    showCategoriesDb(categories) {
        var result = null;
        if (categories.length > 0) {
            result = categories.map((categories, index) => {
                return <CategoriesItem
                    key={index}
                    categories={categories}
                    delcategories={this.props.delcategories}
                    index={index}
                />
            });
        }
        return result;
    }
    render() {
        // console.log(this.props.categories);
        return (
            <div className="col-sm-9 mt-10">
                <h3 style={{ textAlign: "center", marginBottom: "30px", marginTop: "10px" }}>Manage Categories</h3>
                <Link
                    to="/admin/categories/add"
                    className="btn btn-info mb-10">
                    Add
                    </Link>
                <div className="panel panel-primary">
                    <div className="bg-primary text-white">
                        <h3 style={{ textAlign: "center", marginBottom: "0px" }}>
                            Lists Categories
                        </h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>STT </th>
                                    <th>Tên </th>
                                    <th>Trang Thai</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showCategoriesDb(this.props.categories)}
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
        categories: state.CategoriesReducerAdmin
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showCategories: () => {
            dispatch(showApiCategories())
        },
        delcategories: (id) => {
            dispatch(actDelApiCategories(id))
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)