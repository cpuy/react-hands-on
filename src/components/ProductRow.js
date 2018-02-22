import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    return (
      <div>
          <span className={!this.props.product.stocked ? "unStocked" : ""}>{this.props.product.name}</span>
          <span>{this.props.product.price}</span>
      </div>
    );
  }
}