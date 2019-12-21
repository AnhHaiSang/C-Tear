import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddApiCategories, actEditCategories, actUpCategoriesRequest } from '../../../Actions/admin/ActionAdmin';
import { Link } from 'react-router-dom';


class CatelogyActionPage extends Component {
    constructor(props) {
        super(props)
        this.txtname = React.createRef();//lay value cua input va check value cua input
        this.txtstatus = React.createRef();//   "    "   checkbox
        this.state = {
            id : '',
            name: '',
            status: ''
        };
    }

    //sử dụng lifecycle để lấy dữ liệu
    componentDidMount() {
        var { match } = this.props;
        console.log(this.props.match.params);
        if (match.params.id) {
            var id = match.params.id;
            // console.log(id); 
            this.props.editCate(id);
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps && nextProps.EditItem) {
            var { EditItem } = nextProps;
            this.setState({
                id: EditItem.id,
                name: EditItem.name,
                status: EditItem.status,
            })
        }
    }

    onSave = (e) => {
        e.preventDefault()
        var { id } = this.state;
        var txtname = this.txtname.current.value;
        var chbstatus = this.txtstatus.current.checked;
        var categories = {
            id ,
            name: txtname,
            status: chbstatus,
        }
        let { history } = this.props
        // console.log(id);
        if (id) {
            // console.log('updateting...');
            this.setState({
                name: txtname,
                status: chbstatus
            });
            this.props.update(categories)
        } else {
            this.setState({
                name: txtname,
                status: chbstatus
            });
            this.props.addCategories(categories);
        }
        history.goBack();
    } 
    render() {
        console.log(this.state);
        let { name , status } = this.state;
        return (
            <form className="form-inline" onSubmit={this.onSave}>
                <label htmlFor="email2" className="mb-2 mr-sm-2 ml-10">Categories Name</label>
                <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    ref={this.txtname}
                    id="email2"
                    name="email"
                    defaultValue={name}
                />
                <div className="form-check mb-2 mr-sm-2">
                    <label className="form-check-label">
                        <input
                            type="checkbox"
                            ref={this.txtstatus}
                            className="form-check-input active"
                            name="loaispId"
                            defaultChecked={this.txtstatus}
                        />Còn
                    </label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary mb-2 mr-10"
                >Lưu
                </button>
                <Link
                    to="/admin/categories"
                    className="btn btn-primary mb-2"
                >Hủy
                </Link>
            </form>

        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        EditItem: state.EditItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addCategories: (categories) => {
            dispatch(actAddApiCategories(categories))
        },
        editCate: (id) => {
            dispatch(actEditCategories(id))
        },
        update: (categories) => {
            dispatch(actUpCategoriesRequest(categories))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CatelogyActionPage)
