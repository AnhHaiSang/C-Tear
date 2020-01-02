import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actEditBill } from '../../../Actions/admin/ActionAdmin';

class BillActionPage extends Component {
    constructor(props) {
        super(props)
        this.txttinhtrang = React.createRef();
        this.state = {
            id: '',
            tinhtrang: ''
        };
    }
    componentDidMount() {
        var { match } = this.props;
        // console.log(this.props.match.params);
        if (match.params.id) {
            var id = match.params.id;
            this.props.editBillApi(id);
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        // console.log(nextProps.editBill);
        if (nextProps && nextProps.editBill) {
            var { editBill } = nextProps;
            this.setState({
                id: editBill.id,
                name: editBill.information.name,
                status: editBill.chbstatus,
            })
        }
    }
    onSave = (e) => {
        e.preventDefault()
    }
    render() {
        // console.log(this.props.editBill.information.name);
        console.log(this.props.editBill.information);
        return (
            <div className="div-form-bill">
                <form className="form-bill" onSubmit={this.onSave}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">User Name</span>
                        </div>
                        <input
                            type="text"
                            className="form-control form-control"
                            // defaultValue
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Phone Number</span>
                        </div>
                        <input
                            type="text"
                            className="form-control form-control"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Addess</span>
                        </div>
                        <input
                            type="text"
                            className="form-control form-control"
                        />
                    </div>
                    <div className="form-check mb-2 mr-sm-2">
                        <label className="form-check-label">
                            <input
                                ref={this.txttinhtrang}
                                type="checkbox"
                                className="form-check-input active"
                            />Đã chuyển
                        </label>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Created At</span>
                        </div>
                        <input
                            type="text"
                            className="form-control form-control"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Total Price</span>
                        </div>
                        <input
                            type="text"
                            className="form-control form-control"
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Lưu</button>
                        <Link to={"/admin/bill"} className="btn btn-primary">Hủy</Link>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editBill: state.EditBillAdmin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editBillApi: (id) => {
            dispatch(actEditBill(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BillActionPage)