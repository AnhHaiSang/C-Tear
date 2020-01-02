import React from 'react';
import title_dark from './../img/Image_Rudu/title_dark.png';
import icon from './../img/Image_Rudu/icon.jpg';
import customer from './../img/Image_Rudu/customer.jpg';
class Review extends React.Component {
    render() {
        return (
            <div className="main-footer">
                <div className="LineNewProduct col-sm-8">
                    <h3>TIN TỨC &amp; BLOG</h3>
                    <img src={title_dark} alt="title-dark"></img>
                    <div className="main-footer-item">
                        <div className="col-sm-6" >
                            <img src="https://vtv1.mediacdn.vn/thumb_w/650/2019/2/13/ruou130219-1550042051732792044228.jpg" className="detail--img__100 " alt="Vang Thăng Long" />
                            <div className="card-body">
                                <h5 className="card-title">Vang Thăng Long Classic</h5>
                                <p className="card-p">Đăng bởi Ngocnguyen | 25/12/2019 | 2.014 bình luận</p>
                                <p className="card-text">Vang Nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên của hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn, Vang Nổ Thăng long tạo cảm giác hưng phấn, êm dịu, vui tươi, sản phẩm được đóng chai 750ml...</p>
                                <a href="#" className="btn menu_text">Read more</a>
                            </div>
                        </div>
                        <div className="col-sm-6" >
                            <img src="https://vtv1.mediacdn.vn/thumb_w/650/2019/2/13/ruou130219-1550042051732792044228.jpg" className="detail--img__100 " alt="Vang Thăng Long" />
                            <div className="card-body">
                                <h5 className="card-title">Vang Thăng Long Classic</h5>
                                <p className="card-p">Đăng bởi Ngocnguyen | 25/12/2019 | 2.014 bình luận</p>
                                <p className="card-text">Vang Nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên của hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn, Vang Nổ Thăng long tạo cảm giác hưng phấn, êm dịu, vui tươi, sản phẩm được đóng chai 750ml...</p>
                                <a href="#" className="btn menu_text">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" LineNewProduct col-sm-4" style={{ textAlign: "center",  paddingBottom: "2em" }}>
                    <h2>KHÁCH HÀNG</h2>
                    <img src={title_dark} alt="title-dark" ></img><br></br>
                    <img src={icon} alt=""/>
                    <p>Vang Nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên của hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn, Vang Nổ Thăng long tạo cảm giác hưng phấn, êm dịu, vui tươi, sản phẩm được đóng chai 750ml...</p>
                    <img src={customer} alt="" /><br></br>
                    <h4>NGOC NGUYEN</h4>
                    <p style={{color:"#808080"}}>Graphic Design</p>
                </div>

            </div>
        )
    }
}

export default Review;
