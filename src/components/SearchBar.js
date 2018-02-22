import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.search}/>
      </div>
    );
  }
}