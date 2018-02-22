import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


export default class FilterableProductTable extends Component {

  constructor() {
    super();
    this.state = { filterText: 'ball', inStockOnly: true };
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}/>
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}/>
      </div>
    );
  }
}