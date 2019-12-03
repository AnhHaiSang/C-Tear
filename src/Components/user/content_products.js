import React from 'react';
import product1 from './../img/Image_Product/product1.jpg'

class ContentProduct extends React.Component {
    render(){
        return(
            <div className="ContentProduct">
                <div className="background_product">
                    <div className="card">
                        <div className="img_card">
                            <img className="img_pro1" src={ product1 } alt="Denim Jeans" />
                        </div>
                        <div className="content_card">
                            <h1>RƯỢU VANG ALPATAGO 100 YEARS</h1>
                            <p className="price">$1000</p>
                            <p>Rượu vang đỏ có chứa một hỗn hợp phức tạp các hợp chất hoạt tính sinh học, trong đó có flavonol, monomeric và polymeric flavan-3-ols, anthocyanins, axit phenolic và resveratrol. Brown cho biết một vài trong số các hợp chất kể trên, đặc biệt là resveratrol, có lợi cho sức khỏe.</p>
                            <p><button type="button" className="btn btn-success">Add to Cart</button></p>
                        </div>
                        <div className="clr" />
                    </div>
                </div>      
            </div>
        )
    }
}

export default ContentProduct;
