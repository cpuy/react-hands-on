import React, {Component} from 'react';
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";


export default class ProductTable extends Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        let products = this.props.products;
        let rows = [];
        let previousCategory;

        products.map((product) => {
            if(product.name.indexOf(filterText) === -1){
                return;
            }
            if(inStockOnly && !product.stocked){
                return;
            }
            if (previousCategory !== product.category) {
                previousCategory = product.category;
                rows.push(<ProductCategoryRow category={product.category}/>);
            }
            rows.push(<ProductRow product={product}/>);
        });

        return (
            <table>
                <thead>
                <tr style={{fontWeight: 'bold'}}>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}