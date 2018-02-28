import React, { Component } from 'react';
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.updateInStock = this.updateInStock.bind(this);
    }

    updateSearch(event){
        this.setState({filterText: event.target.value})
    }
    updateInStock(event){
        this.setState({inStockOnly: event.target.checked})
    }
  render() {


    return (
      <div>
        <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onSearch={this.updateSearch}
            onCheck={this.updateInStock}
        />
        <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}