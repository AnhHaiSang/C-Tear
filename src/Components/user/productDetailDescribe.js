import React from 'react'
class ProductDescrible extends React.Component {
    render() {
        let { products } = this.props
        return (
                <section className="container">
                
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs" role="tablist" style={{ width: "85%", margin: "auto", textAlign: "center" ,paddingTop:"1%"}}>
                        <li className="nav-item margin2">
                            <a className="btn btn-warning active" data-toggle="tab" href="#home">ĐẶC ĐIỂM NỔI BẬT</a>
                        </li>
                        <li className="nav-item margin2">
                            <a className="btn btn-warning" data-toggle="tab" href="#menu1">THÔNG TIN SẢN PHẨM</a>
                        </li>
                        <li className="nav-item margin2">
                            <a className="btn btn-warning" data-toggle="tab" href="#menu2">ĐÁNH GIÁ</a>
                        </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                        <div id="home" className="container tab-pane active"><br />
                            <p>{products.name} có hương thơm thanh nhã của các loại hoa trắng. Hòa quyện trong hương hoa nhài là  mùi vị nồng đượm của quả mận ngọt , quả sung chín , cam tây , quế nghiền và quả phỉ mang đến cho người thưởng thức một trải nghiệm phong phú, dư vị mượt mà, sâu sắc và kéo dài mãi về sau.</p>
                        </div>
                        <div id="menu1" className="container tab-pane fade"><br />
                        <p>{products.name} có hương thơm thanh nhã của các loại hoa trắng. Hòa quyện trong hương hoa nhài là  mùi vị nồng đượm của quả mận ngọt , quả sung chín , cam tây , quế nghiền và quả phỉ mang đến cho người thưởng thức một trải nghiệm phong phú, dư vị mượt mà, sâu sắc và kéo dài mãi về sau.</p>
                        </div>
                        <div id="menu2" className="container tab-pane fade"><br />
                        <p>{products.name} có hương thơm thanh nhã của các loại hoa trắng. Hòa quyện trong hương hoa nhài là  mùi vị nồng đượm của quả mận ngọt , quả sung chín , cam tây , quế nghiền và quả phỉ mang đến cho người thưởng thức một trải nghiệm phong phú, dư vị mượt mà, sâu sắc và kéo dài mãi về sau.</p>
                        </div>
                    </div>
                </section>
        )
    }
}
export default ProductDescrible