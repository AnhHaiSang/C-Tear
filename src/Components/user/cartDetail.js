import React from 'react';


class CartDetail extends React.Component{
    render(){
        return(
            <div className="cart detail">
                {this.props.children} 
                <div className="clr"></div>
            </div>
           
        )
    }
}

export default CartDetail;
