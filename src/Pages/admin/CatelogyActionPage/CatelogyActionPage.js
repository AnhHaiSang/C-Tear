import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddApiCategories } from '../../../Actions/admin/ActionAdmin';


class CatelogyActionPage extends Component {
    constructor(props) {
        super(props)
        this.txtname = React.createRef();//lay value cua input va check value cua input
        this.txtstatus = React.createRef();//   "    "   checkbox
        this.state = {
            id: '',
            name: '',
            status: ''
        };
    }
    componentDidMount(){
        // this.props.actCategories
    }
    onSave = (e) => { 
        e.preventDefault()
        // console.log(this.props.actCategories.length);
        var {id,name,status} = this.state;
        // var id = this.props.actCategories.length+1;
        var txtname = this.txtname.current.value;
        var chbstatus = this.txtstatus.current.checked;
        // console.log(ckbstatus);
        var categories = {
            id:id,
            name:txtname,
            status:chbstatus,
        }
        this.props.addCategories(categories);
        this.props.history.goBack('/admin/categories');
    }
    render() {
        console.log(this.props);
        return (
            <form className="form-inline" onSubmit={this.onSave}>
                <label htmlFor="email2" className="mb-2 mr-sm-2 ml-10">Name:</label>
                <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    ref={this.txtname}
                    id="email2"
                    name="email"
                />
                <div className="form-check mb-2 mr-sm-2">
                    <label className="form-check-label">
                        <input
                            type="checkbox"
                            ref={this.txtstatus}
                            className="form-check-input active"
                            name="loaispId"
                        />Còn
                    </label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary mb-2 mr-10"
                >Lưu
                </button>
                <button
                    type="reset"
                    className="btn btn-primary mb-2"
                >Hủy
                </button>
            </form>

        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        actCategories: state.CategoriesReducerAdmin
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addCategories: (categories) => {
            dispatch(actAddApiCategories(categories))
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CatelogyActionPage)
