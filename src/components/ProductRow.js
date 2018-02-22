import React, {Component} from 'react';

export default class ProductRow extends Component {
  render() {
    let product = this.props.product;
    return (
      <div>
        <div className="ProductRow-name" style={product.stocked ? { color: "red" } : {}}>{product.name}</div>
        <div className="ProductRow-price">{product.price}</div>
      </div>
    );
  }
}