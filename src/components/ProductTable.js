import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  render() {
    let products = this.props.products;

    let reducer = (accumulator, currentValue) => {
      if (!accumulator[currentValue.category]) {
        accumulator[currentValue.category] = [];
      }
      accumulator[currentValue.category].push(<ProductRow product={currentValue}/>);
      return accumulator;
    };
    let sortedProducts = products.reduce(reducer, {});

    return (
      <div>
          <div>
            <span>Name</span>
            <span>Price</span>
          </div>
          {Object.keys(sortedProducts).map((currentValue) => {
            return (
              <div>
                <ProductCategoryRow category={currentValue}/>
                {sortedProducts[currentValue]}
              </div>
            )
          })
          }
      </div>
    );
  }
}