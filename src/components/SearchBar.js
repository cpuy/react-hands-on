import React, {Component} from 'react';

export default class SearchBar extends Component {
    render() {
        const filterText=this.props.filterText;
        const inStockOnly=this.props.inStockOnly;
        const onSearch=this.props.onSearch;
        const onCheck=this.props.onCheck;

        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={onSearch}
                />
                <p>

                    <input onChange={onCheck} type="checkbox" checked={inStockOnly}/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}