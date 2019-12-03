import React from 'react';
import slide1 from './../img/Image_Rudu/slide1.jpg';
import slide2 from './../img/Image_Rudu/slide2.jpg';
import slide3 from './../img/Image_Rudu/slide3.jpg';



class Slide extends React.Component {
    render(){
        return(
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
                        <img className="slide_items" src={slide1} alt="slide-1-2050x898" width={1100} height={300} />
                    </div>
                    <div className="carousel-item"> 
                        <img className="slide_items" src={slide2} alt="slide-2" width={1100} height={300} />
                    </div>
                    <div className="carousel-item">
                        <img className="slide_items" src={slide3} alt="slide-3" width={1100} height={300} />
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
