import React from 'react';

class CartButton extends React.Component {
    render() {
        return (
            <div className="button_action" >
                <button className="btn btn-dark">Tiếp tục mua hàng</button>
                <button className="btn btn-dark">Xóa</button>
                <button className="btn btn-dark">Cập nhật</button>
            </div>

        )
    }
}

export default CartButton;