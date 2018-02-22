import React, {Component} from 'react';

export default class ProductRow extends Component {
  render() {
    let product = this.props.product;
    return (
      <div>
        <div style={product.stocked ? { color: "red" } : {}}>{product.name}</div>
        <div>{product.price}</div>
      </div>
    );
  }
}