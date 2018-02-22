import React, { Component } from 'react';

export default class ProductCategoryRow extends Component {
  render() {
    return (

      <div>
        {this.props.category}
      </div>
    );
  }
}