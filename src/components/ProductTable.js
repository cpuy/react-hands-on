import React, {Component} from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default class ProductTable extends Component {

  render() {
    const categories = this.props.products
      .map(p => p.category)
      .filter((v, i, a) => a.indexOf(v) === i);
    const rows = [];

    let lastCategory = null;
    this.props.products.forEach(product => {

      if (lastCategory !== product.category) {
        rows.push(<ProductCategoryRow category={product.category}/>)
        lastCategory = product.category;
      }
      rows.push(<ProductRow product={product}/>)
    });




    return (
      <div>
        <div>
          <div>Name</div>
          <div>Price</div>
        </div>
        {rows}
      </div>
    );
  }
}