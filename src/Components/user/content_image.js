import React from 'react';

import Image_Deco1 from './../img/Image_Rudu/Image_Deco1.jpg';
import Image_Deco2 from './../img/Image_Rudu/Image_Deco2.jpg';
import Image_Deco3 from './../img/Image_Rudu/Image_Deco3.jpg';
import Image_Deco4 from './../img/Image_Rudu/Image_Deco4.png';
import Image_Deco5 from './../img/Image_Rudu/Image_Deco5.jpg';
import Image_Deco6 from './../img/Image_Rudu/Image_Deco6.jpg';
import Image_Deco7 from './../img/Image_Rudu/Image_Deco7.jpg';
import Image_Deco8 from './../img/Image_Rudu/Image_Deco8.jpg';

class ImageProduct extends React.Component {
    render(){
        return(
            <div className="ImageProduct">
                <img className="Image Deco1" src={Image_Deco1} alt="Image Deco1" />
                <img className="Image Deco2" src={Image_Deco2} alt="Image Deco2" />
                <img className="Image Deco3" src={Image_Deco3} alt="Image Deco3" />
                <img className="Image Deco4" src={Image_Deco4} alt="Image Deco4" />
                <img className="Image Deco5" src={Image_Deco5} alt="Image Deco5" />
                <img className="Image Deco6" src={Image_Deco6} alt="Image Deco6" />
                <img className="Image Deco7" src={Image_Deco7} alt="Image Deco7" />
                <img className="Image Deco8" src={Image_Deco8} alt="Image Deco8" />  
            </div>
        )
    }
}

export default ImageProduct;
