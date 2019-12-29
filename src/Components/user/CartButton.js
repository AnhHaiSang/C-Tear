import React from 'react';

class CartButton extends React.Component {
    render() {
        return (
            <div className="button_action" >
                <button className="btn menu_text">Tiếp tục mua hàng</button>
                <button className="btn menu_text">Xóa</button>
                <button className="btn menu_text">Cập nhật</button>
            </div>

        )
    }
}

export default CartButton;