import React from 'react';
// import { Link } from 'react-router-dom';
import ProductDescrible from './productDetailDescribe';
class ProductDetailLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
    if (this.state.count <= 1) {
      this.setState({
        count: 1
      })
    }
  }


  addcart = (product, count) => {
    let { history } = this.props;
    this.props.addtocart(product, count);
    history.push('/giohang')
  };
  showReview(review) {
    var result = [];
    for (var i = 1; i <= review; i++) {
      result.push(<span key={i} className="fa fa-star checked"></span>)
    }
    for (var j = 1; j <= (5 - review); j++) {
      result.push(<span key={i + j} className="fa fa-star-o"></span>)
    }

    return result;
  }

  // checklogin = (products,count) => {
  //   // console.log(this.props)
  //   let { history} = this.props;
  //   if (sessionStorage.getItem('TOKEN')) {
  //     this.addcart(products, count);
  //     history.push('/giohang')
  //   } else { history.push('/login') }
  // }
  log
  render() {
    var { products } = this.props;

    // console.log(this.props);

    return (
      <div className="detail">

        <div style={{ width: "40%", float: "left", border: "solid #7f7f7f 1px" }} >
          <table>
            <tbody>
              <tr>
                <td><img src={products.img} alt="" style={{ width: "100%" }} /></td>
              </tr>
            </tbody>

          </table>


        </div>

        <div className="form-group" style={{ width: "55%", float: "right", marginLeft: "3%" }}>
          <h2>{products.name}</h2>

          <div style={{ height: '50 px' }}>
            <img src="../Image_Rudu/titleleft-dark.png" alt="giohang" />
          </div>

          <h1 style={{ color: "#e6ae48" }}>{products.price}<sup>$</sup></h1>

          <hr ></hr>
          <h4>{this.showReview(products.review)}</h4>

          <hr ></hr>
          <div>
            <p style={{ fontSize: "20px" }} htmlFor="sel1">KÍCH CỠ</p>
            <select style={{ width: "20%" }} className="form-control" id="sel1">
              <option>To</option>
              <option>Vừa</option>
              <option>Nhỏ</option>
            </select>
            <br />
          </div>


          <div>
            <p style={{ fontSize: "20px" }}>SỐ LƯỢNG: </p>
            <button className="btn btn-light" onClick={this.decrement}><h5>-</h5></button>
            <input className="btn" style={{ width: "35px", textAlign: "center" }} value={this.state.count} />
            <button className="btn btn-light" onClick={this.increment}><h5>+</h5></button>
            <button style={{ marginLeft: "3%" }} onClick={() => this.addcart(products, this.state.count)} type="button" className="btn btn-dark">Add to Cart</button>
          </div>
          <div style={{ marginTop: "5%" }} >
            <h5>MÔ TẢ</h5>
            <p> Một hợp chất có trong rượu vang được gọi là resveratro có khả năng làm tăng tối đa tuổi thọ. Resveratro còn có khả năng ngăn chặn mật độ </p>
          </div>
        </div>

        <ProductDescrible products={products} />

      </div>
    )
  }
}


export default ProductDetailLists;
