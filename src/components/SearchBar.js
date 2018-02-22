import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input placeholder="Search..." value={this.props.filterText}/>
        <div className="SearchBar-checkbox">
          <input type="checkbox" value={this.props.inStockOnly}/>
          <span>Only show product in store</span>
        </div>
      </div>
    );
  }
}