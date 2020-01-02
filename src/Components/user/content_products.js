import React from 'react';
// import product1 from './../img/Image_Product/product1.jpg'
import wine from '../img/Image_Rudu/wine-1.jpg'
import { Link } from 'react-router-dom';
class ContentProduct extends React.Component {
    render() {
        return (
            <section className="ContentProduct">
                <div className="background_product">
                    <img src={wine} alt="" />
                </div>
                <div className="card card_product">

                    <div className="img_card col-sm-6" style={{float:"left",padding:0}}>
                        <div className="content-discount-ab"><div className="text_rotate">5%</div></div>
                        <img className="img_pro1 " src="../Product/product1.jpg" alt="Denim Jeans" />
                    </div>
                    <div className="content_card col-sm-6"  style={{float:"right"}}>
                        <h1>RƯỢU VANG ALPATAGO 100 YEARS</h1>
                        <p className="price">$1000</p>
                        <p>Rượu vang đỏ có chứa một hỗn hợp phức tạp các hợp chất hoạt tính sinh học, trong đó có flavonol, monomeric và polymeric flavan-3-ols, anthocyanins, axit phenolic và resveratrol. Brown cho biết một vài trong số các hợp chất kể trên, đặc biệt là resveratrol, có lợi cho sức khỏe.</p>
                        <br></br>
                        <Link to={`/ProductDetail/${1}`}><button type="button" to="/giohang" className="btn btn-success" style={{marginBottom:"2%"}}>Xem Chi Tiết</button></Link>
                    </div>
                    <div className="clr" />
                </div>

            </section>
        )
    }
}

export default ContentProduct;
