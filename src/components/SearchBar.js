import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input placeholder="Search..." value={this.props.filterText}
               onChange={(e) =>
                 this.props.onChangeCallBack({ filterText: e.target.value })}/>
        <div className="SearchBar-checkbox">
          <input type="checkbox"
                 checked={this.props.inStockOnly}
                 onChange={(e) =>
                   this.props.onChangeCallBack({ inStockOnly: e.target.checked })}/>
          <span>Only show product in store</span>
        </div>
      </div>
    );
  }
}