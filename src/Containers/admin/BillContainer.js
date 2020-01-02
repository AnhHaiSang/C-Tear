import React, { Component } from 'react';
import OrderItem from '../../Components/admin/Order/OrderItem';
import { connect } from 'react-redux';
import { showApiBill } from '../../Actions/admin/ActionAdmin';

class BillContainer extends Component {
    componentDidMount() {
        this.props.showBill();
    }
    showBillDb(billad) {
        var result = null;
        if (billad.length > 0) {
            result = billad.map((billad, index) => {
                return <OrderItem
                    key={index}
                    billad={billad}
                    index={index}
                />
            });
        }
        return result;
    }
    render() {
        // console.log(this.props);
        return (
            <div className="col-sm-9 mt-10">
                <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Manage Bill</h3>
                <div className="panel panel-primary">
                    <div className="bg-primary text-white">
                        <h3 style={{ textAlign: "center", marginBottom: "0px" }}>
                            Lists Bill
                            </h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>User Name</th>
                                    <th>Phone Number</th>
                                    <th>Addess</th>
                                    <th>Status Ship</th>
                                    <th>Created At</th>
                                    <th>Total Price</th>
                                    <th>Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showBillDb(this.props.BillAdmin)}
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
        BillAdmin: state.BillReducerAdmin
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showBill: () => {
            dispatch(showApiBill())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BillContainer)