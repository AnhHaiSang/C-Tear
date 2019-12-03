import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <div className="footer">
                <footer className="foooter_content">
                    <div className="info lists_footer">
                        <div className="header_items_footer">
                            <a><h4>THÔNG TIN</h4></a>
                        </div>
                        <div className="content_footer">
                            <a><p>VỀ CHÚNG TÔI</p></a>
                            <a><p>GIAO HÀNG</p></a>
                            <a><p>CẢM NGHĨ</p></a>
                            <a><p>LƯU TRỮ</p></a>
                            <a><p>CHÍNH SÁCH RIÊNG TƯ</p></a>
                        </div>
                    </div>
                    <div className="buy lists_footer">
                        <div className="header_items_footer">
                            <a><h4>MUA HÀNG</h4></a>
                        </div>
                        <div className="content_footer">
                            <a><p>VẬN CHUYỂN VÀ TRẢ HÀNG</p></a>
                            <a><p>MUA HÀNG AN TOÀN</p></a>
                            <a><p>VẬN QUỐC TẾ</p></a>
                            <a><p>LIÊN KẾT</p></a>
                            <a><p>DỊCH VỤ GIẢM GIÁ</p></a>
                        </div>                        
                    </div>
                    <div className="sent_email lists_footer">
                        <div className="header_items_footer">
                            <a><h4>GỬI EMAIL</h4></a>
                        </div>
                        
                        <div className="mt-3">
                            <form>
                                <label htmlFor="demo">Gửi email cho chúng tôi để đc hỗ trợ</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Email của bạn" id="demo" name="email" />
                                <div className="input-group-append">
                                    <span className="input-group-text">Send</span>
                                </div>
                                </div>
                            </form>                          
                        </div>                            
                    </div>
                    <div className="contact_us lists_footer">
                        <p>Posted by: Hege Refsnes</p>
                        <p>Contact information: <a href="mailto:someone@example.com">
                        someone@example.com</a>.</p>
                    </div>
                   
                </footer>
            </div>
        )
    }
}

export default Footer;
