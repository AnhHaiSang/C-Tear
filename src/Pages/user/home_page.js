import React from 'react';
import Header from '../../Components/user/header';

import Footer from '../../Components/user/footer';

class HomePage extends React.Component {
    render(){
        return(
            <div className="home_page">
                <Header />
                {this.props.children}
               
                <Footer />
            </div>
        )
    }
}

export default HomePage;
