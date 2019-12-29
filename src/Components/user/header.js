import React from 'react';
import Slide from './slide';
import Menu from './menu';


class Header extends React.Component {
    render(){
        // console.log(this.props);
        
        return(
            <div className="Header">
                <Slide />
                <Menu history={this.props.history}/>
            </div>
        )
    }
}

export default Header;
