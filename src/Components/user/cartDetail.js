import React from 'react';

class CartDetail extends React.Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default CartDetail;
