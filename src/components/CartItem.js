import React from "react";

class CartItem extends React.Component {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    var cartItem = this.props.item;
    var quantity = this.props.quantity;
    return (
      <tr>
        <th scope="row">
          <img
            src={cartItem.img}
            alt=""
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{cartItem.name}</strong>
          </h5>
        </td>
        <td>{cartItem.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label onClick={() => {this.onMinus()}} 
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a>—</a>
            </label>
            <label onClick={() => {this.onPlus()}}
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotalPrice(cartItem.price, quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => {this.onDelete()}}
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  showSubTotalPrice = (price, quantity) => {
    var subTotalPrice = price * quantity;
    return subTotalPrice;
  } 

  onDelete = () => {
    this.props.deleteFromCart(this.props.item.id);
  }

  onMinus = () => {
    this.props.minusFromCart(this.props.item.id);
  }

  onPlus = () => {
    this.props.plusFromCart(this.props.item.id);
  }
}

export default CartItem;
