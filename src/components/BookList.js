import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/BookList.css";

export class BookList extends Component {
  handleAddToCart = () => {
    this.props.addItemToCart(this.props._id);
  };
  render() {
    return (
      <div className="colum">
        <div className="book-list">
          <img src={this.props.image} alt="" />
          <div className="description">
            <h3>{this.props.tl}</h3>
            <span>{this.props.description}</span>
          </div>
          <div className="price-detail">
            <span>{this.props.price}</span>
            <a href="/">Detail</a>
          </div>
          <div className="button-cart">
            <button onClick={this.handleAddToCart}> Add Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (id) => {
      dispatch({
        type: "CARTS",
        id: id,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(BookList);
