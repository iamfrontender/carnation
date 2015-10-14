var React = require('react');

var productStore = require('../stores/ProductStrore');

var Filter = require('./Filter');
var Product = require('./Product');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            products: productStore.getProducts()
        };
    },

    componentDidMount: function() {
        this.listeners();
        productStore.load();
    },

    listeners: function() {
        productStore.on('change', this._update);
    },

    _update: function(products) {
        this.setState({
            products: products
        });
    },

    render: function() {
        var products = this.state.products.map(product => <Product data={product} key={product.id}/>);

        return (
            <div className="products__list container">
                <h2>Products</h2>
                <Filter />
                <div className="row">
                    {products}
                </div>
            </div>
        );
    }
});