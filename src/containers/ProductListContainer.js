import React from "react";
import ProductList from "../components/ProductList";
import { connect } from "react-redux";
import Product from "../components/Product";
import PropTypes from "prop-types";
import * as actions from "../actions/actions";

class ProductListContainer extends React.Component {
  displayProduct = (products) => {
    if (products.length > 0) {
      var productItem = products.map((item) => {
        return (
          <Product
            key={item.id}
            item={item}
            displayRating={this.displayRating}
            addToCart={this.addToCart}
          />
        );
      });
    }
    return productItem;
  };

  displayRating = (quantity) => {
    var rating = [];
    for (let i = 1; i <= quantity; i++) {
      rating.push(
        <li key={i}>
          <i className="fa fa-star"></i>
        </li>
      );
    }
    for (let i = 1; i <= 5 - quantity; i++) {
      rating.push(
        <li key={quantity + i}>
          <i className="fa fa-star-o"></i>
        </li>
      );
    }
    return rating;
  };

  addToCart = (item) => {
    this.props.addMessage();
    this.props.addToCart(item);
  };

  render() {
    
    var products = this.props.productState;
    return (
      // <ProductList productState={products}/>
      <ProductList>{this.displayProduct(products)}</ProductList>
    );
  }
}

ProductListContainer.propTypes = {
  productState: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    productState: state.product,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addToCart: (item) => {
      dispatch(actions.addToCart(item));
    },
    addMessage: () => {
      dispatch(actions.addMess());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
