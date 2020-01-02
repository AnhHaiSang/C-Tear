import React from 'react';
import imgdemo1 from './../img/Image_Rudu/Image_Deco1.jpg';
import imgdemo2 from './../img/Image_Rudu/Image_Deco2.jpg';
import imgdemo3 from './../img/Image_Rudu/Image_Deco3.jpg';
import imgdemo4 from './../img/Image_Rudu/Image_Deco4.png';
import imgdemo5 from './../img/Image_Rudu/Image_Deco5.jpg';
import imgdemo6 from './../img/Image_Rudu/Image_Deco6.jpg';
import imgdemo7 from './../img/Image_Rudu/Image_Deco7.jpg';
import imgdemo8 from './../img/Image_Rudu/Image_Deco8.jpg';
import title_dark from './../img/Image_Rudu/title_dark.png';
class ImageProduct extends React.Component {
    render() {
        return (
            <section>
                <div className="ImageProduct">
                    <img className="Image Deco1" src={imgdemo1} alt="Deco1" />
                    <img className="Image Deco2" src={imgdemo2} alt="Deco2" />
                    <img className="Image Deco3" src={imgdemo3} alt="Deco3" />
                    <img className="Image Deco4" src={imgdemo4} alt="Deco4" />
                    <img className="Image Deco5" src={imgdemo5} alt="Deco5" />
                    <img className="Image Deco6" src={imgdemo6} alt="Deco6" />
                    <img className="Image Deco7" src={imgdemo7} alt="Deco7" />
                    <img className="Image Deco8" src={imgdemo8} alt="Deco8" />
                </div>
                <div className="LineNewProduct">
                    <h3>SẢN PHẨM NỔI BẬT</h3>
                    <img src={title_dark} alt="title-dark"></img>
                </div>
            </section>
        )
    }
}

export default ImageProduct;
