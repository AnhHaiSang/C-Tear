import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css'

class ProductDetailLists extends React.Component {
    constructor(props){
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
    if(this.state.count<=1){
        this.setState({
            count:1
        })
    }
  }

  render() {
    var { products } = this.props;
    console.log(this.props.img);
    
    
    return (
      <div style={{margin:" auto",width:"70%"}}>
        <div style={{width:"42%",float:"left"}}>
          <table border={1}>
            <tr>
              <td><img src={products.img}alt="" style={{width:"100%"}}/></td>
            </tr>
      
          </table>
        </div>
        <div style={{ width:"55%",height:"500px",float:"right",marginLeft:"3%"}}>

            <h2>{products.name}</h2>

            <div style={{ height: '50 px' }}>
              <img src="../Image_Rudu/titleleft-dark.png" alt="giohang" />
            </div>

            <h1 style={{color:"#e6ae48"}}>{products.price}<sup>đ</sup></h1>
            <Rater total={5}  rating={products.review}/>
            <div>
                <h4>SỐ LƯỢNG</h4>
                <button onClick={this.decrement}>-</button>
                <input style={{width:"35px", textAlign:"center"}} value={this.state.count}/>
                <button onClick={this.increment}>+</button>
                <button style={{marginLeft:"3%"}} type="submit" className=" btn-dark">Add to Cart</button>
            </div>
            

        </div>
        
        
      </div>
    )
  }
}


export default ProductDetailLists;
