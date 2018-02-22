import React, {Component} from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default class ProductTable extends Component {

  render() {
    const rows = [];

    let lastCategory = null;
    this.props.products
      .filter(product => product.name.includes(this.props.filterText))
      .filter(product => !this.props.inStockOnly || !product.stocked)
      .forEach(product => {

      if (lastCategory !== product.category) {
        rows.push(<ProductCategoryRow category={product.category}/>)
        lastCategory = product.category;
      }
      rows.push(<ProductRow product={product}/>)
    });

    return (
      <div>
        <div>
          <div className="ProductTable-name">Name</div>
          <div className="ProductTable-price">Price</div>
        </div>
        {rows}
      </div>
    );
  }
}