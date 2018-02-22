import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  render() {
    let search = "test";
    return (
      <div>
          <SearchBar search={search}/>
          <ProductTable products={this.props.products} />
      </div>
    );
  }
}