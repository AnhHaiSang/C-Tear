import React from 'react';
import { Link } from "react-router-dom";
import footer from "../../Image_Rudu/footer.jpg"

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div style={{ width: "80%", margin: "auto" }}>
                    <img src={footer} width={"100%"} alt=''/>
                </div>

                <div className="foooter_content">
                    <div className="col-sm">
                        <div className="header_items_footer">
                            <h4>THÔNG TIN</h4>
                        </div>
                        <div className="content_footer">
                            <Link to="/"><p>VỀ CHÚNG TÔI</p></Link >
                            <Link to="/"><p>GIAO HÀNG</p></Link >
                            <Link to="/"><p>CẢM NGHĨ</p></Link >
                            <Link to="/"><p>LƯU TRỮ</p></Link >
                            <Link to="/"><p>CHÍNH SÁCH RIÊNG TƯ</p></Link >
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="header_items_footer">
                            <h4>MUA HÀNG</h4>
                        </div>
                        <div className="content_footer">
                            <Link to="/"><p>VẬN CHUYỂN VÀ TRẢ HÀNG</p></Link >
                            <Link to="/"><p>MUA HÀNG AN TOÀN</p></Link >
                            <Link to="/"><p>VẬN QUỐC TẾ</p></Link >
                            <Link to="/"><p>LIÊN KẾT</p></Link >
                            <Link to="/"><p>DỊCH VỤ GIẢM GIÁ</p></Link >
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="header_items_footer">
                            <h4>GỬI EMAIL</h4>
                        </div>

                        <div className="mt-3">
                            <form>
                                <label htmlFor="demo">Gửi email cho chúng tôi để đc hỗ trợ</label>
                                <div className="input-group">
                                    <input type="text" className="form-control col-sm-10" placeholder="Email của bạn" id="demo" name="email" />
                                    <button type="email" id="mailbutton" className="menu_text">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm">
                        <p>Posted by: Hege Refsnes</p>
                        <p>Contact information: <Link to="/mailto:someone@example.com">
                            someone@example.com</Link >.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
