import React from 'react';
import title_dark from './../img/Image_Rudu/title_dark.png';
import ImageProduct from './content_image';
class LineNewProduct extends React.Component {
    render() {
        return (
            <section className="section-tow section-new-product LineNewProduct">
                <div className="full-width">
                    <div className="warpper">
                        <div className="inner">
                            <div className="heading">
                                <h3>Sản phẩm mới</h3>
                                <img src={title_dark} alt="title-dark"></img>
                            </div>
                            <div className="list-product">
                                <ImageProduct />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LineNewProduct;
