import React, { Component } from 'react';

export default class ProductCategoryRow extends Component {
  render() {
    return (

      <div className="ProductCategoryRow-category">
        {this.props.category}
      </div>
    );
  }
}