import React from 'react';
import Slide from './slide';
import Menu from './menu';


class Header extends React.Component {
    render(){
        return(
            <div className="Header">
                <Slide />
                <Menu />
            </div>
        )
    }
}

export default Header;
