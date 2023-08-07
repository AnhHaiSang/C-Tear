import React from 'react';
import slide1 from './../img/Image_Rudu/slide1.jpg';
import slide2 from './../img/Image_Rudu/slide2.jpg';
import slide3 from './../img/Image_Rudu/slide3.jpg';
import { Link } from 'react-router-dom';


class Slide extends React.Component {
    render() {
        const products = [
            {
                id: 1,
                name: "RƯỢU VANG 50 ANNIVERSARIO",
                img: "https://res.cloudinary.com/sangco1997/image/upload/v1576296743/Img_project/product1_say0eu.jpg",
                price: 165,
                description: "Rượu vang đỏ có chứa một hỗn hợp phức tạp các hợp chất hoạt tính sinh học, trong đó có flavonol, monomeric và polymeric flavan-3-ols, anthocyanins, axit phenolic và resveratrol. Brown cho biết một vài trong số các hợp chất kể trên, đặc biệt là resveratrol, có lợi cho sức khỏe.",
            },
            {
                id: 2,
                name: "RƯỢU VANG 60 SESSANTANNI LIMITED EDITION",
                img: "https://res.cloudinary.com/sangco1997/image/upload/v1576296743/Img_project/product2_rlyuco.jpg",
                price: 165,
                description: "Rượu vang đỏ có chứa một hỗn hợp phức tạp các hợp chất hoạt tính sinh học, trong đó có flavonol, monomeric và polymeric flavan-3-ols, anthocyanins, axit phenolic và resveratrol. Brown cho biết một vài trong số các hợp chất kể trên, đặc biệt là resveratrol, có lợi cho sức khỏe.",
            },
            {
                id: 3,
                name: "RƯỢU VANG 62 ANNIVERSARIO",
                img: "https://res.cloudinary.com/sangco1997/image/upload/v1576296744/Img_project/product3_rbafgc.jpg",
                price: 165,
                description: "Rượu vang đỏ có chứa một hỗn hợp phức tạp các hợp chất hoạt tính sinh học, trong đó có flavonol, monomeric và polymeric flavan-3-ols, anthocyanins, axit phenolic và resveratrol. Brown cho biết một vài trong số các hợp chất kể trên, đặc biệt là resveratrol, có lợi cho sức khỏe.",
            },
        ];
        return (
            <div className="slide">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to={0} className="active" />
                        <li data-target="#demo" data-slide-to={1} />
                        <li data-target="#demo" data-slide-to={2} />
                    </ul>
                    {/* The slideshow */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="bg-fill bg-img background_product">
                                <img className="slide_items" src={slide1} alt="slide-1-2050x898" width={1100} height={300} />
                            </div>
                            <div className="card">
                                <div className="img_card">
                                    <img className="img_pro1" src="../Product/product1.jpg" alt="Denim Jeans" />
                                </div>
                                <div className="content_card">
                                    <h1>RƯỢU VANG ALPATAGO 100 YEARS</h1>
                                    <p className="price">$1000</p>
                                    <p>Rượu vang đỏ có chứa một hỗn hợp phức tạp các hợp chất hoạt tính sinh học, trong đó có flavonol, monomeric và polymeric flavan-3-ols, anthocyanins, axit phenolic và resveratrol. Brown cho biết một vài trong số các hợp chất kể trên, đặc biệt là resveratrol, có lợi cho sức khỏe.</p>
                                    <Link to={"/ProductsContainer"}><button type="button" to="/giohang" className="btn btn-success">Add to Cart</button></Link>
                                </div>
                                <div className="clr" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="bg-fill bg-img background_product">
                                <img className="slide_items" src={slide2} alt="slide-2" width={1100} height={300} />
                            </div>
                            <div className="card">
                                <div className="img_card">
                                    <img className="img_pro1" src="../Product/product1.jpg" alt="Denim Jeans" />
                                </div>
                                <div className="content_card">
                                    <h1>RƯỢU VANG ALPATAGO 100 YEARS</h1>
                                    <p className="price">$1000</p>
                                    <p>Rượu vang đỏ có chứa một hỗn hợp phức tạp các hợp chất hoạt tính sinh học, trong đó có flavonol, monomeric và polymeric flavan-3-ols, anthocyanins, axit phenolic và resveratrol. Brown cho biết một vài trong số các hợp chất kể trên, đặc biệt là resveratrol, có lợi cho sức khỏe.</p>
                                    <Link to={"/ProductsContainer"}><button type="button" to="/giohang" className="btn btn-success">Add to Cart</button></Link>
                                </div>
                                <div className="clr" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="bg-fill bg-img background_product">
                                <img className="slide_items" src={slide3} alt="slide-3" width={1100} height={300} />
                            </div>
                            <div className="card">
                                <div className="img_card">
                                    <img className="img_pro1" src="../Product/product1.jpg" alt="Denim Jeans" />
                                </div>
                                <div className="content_card">
                                    <h1>RƯỢU VANG ALPATAGO 100 YEARS</h1>
                                    <p className="price">$1000</p>
                                    <p>Rượu vang đỏ có chứa một hỗn hợp phức tạp các hợp chất hoạt tính sinh học, trong đó có flavonol, monomeric và polymeric flavan-3-ols, anthocyanins, axit phenolic và resveratrol. Brown cho biết một vài trong số các hợp chất kể trên, đặc biệt là resveratrol, có lợi cho sức khỏe.</p>
                                    <Link to={"/ProductsContainer"}><button type="button" to="/giohang" className="btn btn-success">Add to Cart</button></Link>
                                </div>
                                <div className="clr" />
                            </div>
                        </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon" />
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Slide;
