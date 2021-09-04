import React from "react";


class Product extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img
              style={{ height: "300px" }}
              src={item.img}
              className="img-fluid"
              alt=""
            />
            <a href=" #">
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href=" #">{item.name}</a>
              </strong>
            </h4>
            <ul className="rating">{this.props.displayRating(item.rating)}</ul>
            <p className="card-text">{item.description}</p>
            <div className="card-footer">
              <span className="left">{item.price}$</span>
              <span className="right">
                <a
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => {this.addToCart(item)}}
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  addToCart = (item) => {
    this.props.addToCart(item);
    // this.props.addMessage();
  }
}




export default Product;
