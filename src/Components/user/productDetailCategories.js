import React from 'react';
import Categories from './Categories';
import title_dark from './../img/Image_Rudu/title_dark.png';
import { connect } from 'react-redux';
import { GetApiCatgories } from '../../Actions/user/ActionUser';
class ProductDetailCategories extends React.Component {
  
  
  render() {
    // console.log(this.props);
    var { categories } = this.props;
    // /*eslint no-lone-blocks: "error"*/
    {this.abc()}
    return (
      <div>
        <div className="LineNewProduct" >
          <h3>SẢN PHẨM LIÊN QUAN</h3>
          <img src={title_dark} alt="title-dark"></img>
        </div>
        
        {this.showcategories(categories)}


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
  abc = () => {
    this.props.getcate(this.props.products.loaispId)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categoriesReducer 
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getcate: (id) => {
      dispatch(GetApiCatgories(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailCategories)
