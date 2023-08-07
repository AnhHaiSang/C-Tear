import React from 'react';

import Menu from './menu';


class Header extends React.Component {
    render(){
        return(
            <header className="header" id="header">
                <Menu />
            </header>
        )
    }
}

export default Header;
