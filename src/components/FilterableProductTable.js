import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";


export default class FilterableProductTable extends Component {

  constructor() {
    super();
    this.state = { filterText: '', inStockOnly: false };
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onChangeCallBack={(newState) => this.setState(newState)}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}/>
      </div>
    );
  }
}