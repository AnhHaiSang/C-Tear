import React from 'react';
import Header from '../../Components/user/header';

import Footer from '../../Components/user/footer';

class HomePage extends React.Component {
    render(){
        // console.log(this.props.children.props);
        
        return(
            <div className="home_page">
                <Header history={this.props.children.props.history}/>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default HomePage;
