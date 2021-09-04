import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as actions from "../actions/actions";

class CartContainer extends React.Component {
  displayProducts = (cart) => {
    if (cart.length === 0) {
      return <div style={{color:'red'}}>Không có sản phẩm trong giỏ hàng</div>;
    }
    var cartItem = cart.map((item) => {
      if (cart.length > 0) {
        return (
          <CartItem
            key={item.product.id}
            item={item.product}
            quantity={item.quantity}
            deleteFromCart={this.deleteFromCart}
            minusFromCart={this.minusFromCart}
            plusFromCart={this.plusFromCart}
          />
        );
      } else {
        return null;
      }
    });
    return cartItem;
  };

  displayTotal = (cart) => {
    var result = 0;
    cart.forEach((item) => {
      result += item.product.price * item.quantity;
    });
    return <CartResult>{result}</CartResult>;
  };

  deleteFromCart = (id) => {
    this.props.deleteFromCart(id);
    this.props.deleteMessage();
  };

  minusFromCart = (id) => {
    this.props.minusFromCart(id);
    this.props.updateMessage();
  };

  plusFromCart = (id) => {
    this.props.plusFromCart(id);
    this.props.updateMessage();
  };

  render() {
    var cart = this.props.cartState;
    return (
      <Cart>
        {this.displayProducts(cart)}
        {this.displayTotal(cart)}
      </Cart>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartState: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteFromCart: (id) => {
      dispatch(actions.deleteFromCart(id));
    },
    minusFromCart: (id) => {
      dispatch(actions.minusFromCart(id));
    },
    plusFromCart: (id) => {
      dispatch(actions.plusFromCart(id));
    },
    deleteMessage: () => {
      dispatch(actions.deleteMess());
    },
    updateMessage: () => {
      dispatch(actions.updateMess());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
