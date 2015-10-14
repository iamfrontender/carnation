var utils = require('../utils.js');
var filterStore = require('./FilterStore.js');

var ProductStore = function() {
    this.listeners = {};
    this._products = [];

    this.init();
};

ProductStore.prototype = {

    TAG_SPLITTER: ',',

    init: function() {
        this.add(window.products);

        filterStore.on('change', this.filter.bind(this));
    },

    on: function(event, listener) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(listener);
    },

    emit: function(event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(listener => {
                listener(data);
            });
        }
    },

    add: function(products) {
        if (!(products instanceof  Array)) {
            products = [products];
        }

        products.forEach(this._addProduct, this);

        this.emit('change', this.getProducts());
    },

    _addProduct: function(product) {
        this._products.push(this._processProduct(product));
    },

    _processProduct: function(product) {
        product.tags = product.tags.split(this.TAG_SPLITTER);

        return product;
    },

    remove: function(id) {
        // Out of scope
    },

    filter: function(filter) {
        this.emit('change', this._products.filter((product) =>
            utils.hasAll(product.tags, filter)
        ))
    },

    getProducts: function() {
        return this._products;
    }
};

module.exports = new ProductStore();