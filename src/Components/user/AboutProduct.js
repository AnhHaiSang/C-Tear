import React from 'react';
// import product1 from './../img/Image_Product/product1.jpg';
import product from '../../Image_Rudu/product.jpg';
import product2 from '../../Image_Rudu/product2.jpg';
import title_dark from './../img/Image_Rudu/title_dark.png';
class AboutProduct extends React.Component {
    render() {
        return (
            <section className="AboutProduct">
                <div className="img-aboutproduct">
                    <img src={product} style={{ float: "left" }} alt='' />
                    <img src={product2} style={{ float: "right" }} alt='' />
                </div>
                <div style={{ textAlign: "center", width: "55%", margin: "auto", paddingBottom: "2em" }}>
                    <br></br>
                    <h2>GIỚI THIỆU</h2>
                    <img src={title_dark} alt="title-dark" ></img>
                    <p>Mriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui
                        faciteorum claritatem. Investigtiones demonstraverunt lectores legere me lius quod ii legunt saepius.Claritas est etiam processus dynamicus,
                        qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putam</p>
                    <button className="button-header">Xem Thêm</button>
                </div>

            </section>
        )
    }
}

export default AboutProduct;
