import React from 'react';
import Categories from './Categories';
import title_dark from './../img/Image_Rudu/title_dark.png';
class ProductDetailCategories extends React.Component {
  render() {
    // console.log(this.props.categories);
    var { categories } = this.props;
 
    return (
      <div>
        <div className="LineNewProduct" style={{marginTop:"2%",marginBottom:"2%"}}>
                <h3>SẢN PHẨM LIÊN QUAN</h3>
                <img src={title_dark} alt="title-dark"></img>              
            </div>
        <table className="table" border="1" style={{width:"70%",margin:"auto" }}>
          <tbody>
            <tr>  
              {this.showcategories(categories)}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  showcategories(category) {
    let result = null;
    if (category.length > 0) {
      result = category.map((item, index) => {
        return <Categories key={index} item={item} />
      })
    }
    return result;
  }
}

export default ProductDetailCategories;
