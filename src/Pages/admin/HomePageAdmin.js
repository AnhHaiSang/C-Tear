import React from 'react';
import './admin.css';
import Menu from '../../Components/admin/Menu/Menu';
import ProductList from '../../Components/admin/ProductList/ProductList';

class HomePageAdmin extends React.Component {
    render() {
        return (
            <div className="HomePageAdmin">
                <h2>CALL API</h2>
                <br />
                {/* Nav pills */}
                <Menu />
                {/* Tab panes */}
                <div className="tab-content ">
                    <div id="home" className="container tab-pane active"><br />
                        <h3>HOME</h3>
                        <p>Well Come Manage Admin</p>
                    </div>
                    <div id="menu1" className="container tab-pane fade panel-group"><br />
                        <h3>Manage Products</h3>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <button type="button" className="btn btn-info mb-10">Add</button>
                            <ProductList/>
                        </div>

                    </div>
                    <div id="menu2" className="container tab-pane fade"><br />
                        <h3>Manage Categories</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                    <div id="menu3" className="container tab-pane fade"><br />
                        <h3>Manage Accout</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePageAdmin;
