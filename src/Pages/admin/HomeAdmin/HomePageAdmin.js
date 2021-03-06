import React from 'react';
import './admin.css';
import Menu from '../../../Components/admin/Menu/Menu';
import slide1 from '../../../Image_Rudu/slide1.jpg';

class HomePageAdmin extends React.Component {
    render() {
        return (
            <div className="HomePageAdmin">
                <div className="container-fluid">
                    <div className="admin logo">
                        <img className="slide_items" src={slide1} alt="slide-1-2050x898" width={1100} height={100} />
                    </div>
                    <div className="row content" style={{width:"100%"}}>
                        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" style={{display: "block",border:" 0.125px solid #efef", borderradius: "8px"}}>
                            <div className="col-sm-3 sidenav">
                                <h4 className="h4-name-team ml-10 mt-10">C-Tear</h4>
                                <Menu />
                            </div>
                        </nav>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePageAdmin;
