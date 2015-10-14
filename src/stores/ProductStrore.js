var C = require('../constants');
var utils = require('../utils.js');
var filterStore = require('./FilterStore.js');

/**
 * Product Store, serves for managing product entities
 *
 * @constructor
 * @singleton
 */
var ProductStore = function() {
    this.listeners = {};
    this._products = [];

    this.init();
};

/**
 * @prototype
 */
ProductStore.prototype = {

    /**
     * Splitter for parsing of tag values
     * @type {String}
     */
    TAG_SPLITTER: ',',

    /**
     * Inits the store, wrapping all required listeners.
     */
    init: function() {
        filterStore.on('change', this.filter.bind(this));
    },

    /**
     * Fetches the products dataset from api endpoint,
     * adds received data to the store.
     */
    load: function() {
        superagent
            .get(C.ENDPOINTS.API.PRODUCTS)
            .end(function(err, res) {
                if (err) {
                    console.error(err);
                } else {
                    this.add(res.body);
                }
            }.bind(this));
    },

    /**
     * Registers listener for a given event.
     *
     * @param {String} event name
     * @param {Function} listener
     */
    on: function(event, listener) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(listener);
    },

    /**
     * Emits event with given name.
     *
     * @param {String} event name
     * @param {*} data
     */
    emit: function(event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(listener => {
                listener(data);
            });
        }
    },

    /**
     * Adds given set of products or single product to store.
     *
     * @param {Object|Object[]} products
     */
    add: function(products) {
        if (!(products instanceof  Array)) {
            products = [products];
        }

        products.forEach(this._addProduct, this);

        this.emit('change', this.getProducts());
    },

    /**
     * Adds given product to store.
     *
     * @param {Object} product
     */
    _addProduct: function(product) {
        this._products.push(this._processProduct(product));
    },

    /**
     * Process the raw project DTO for application modules.
     *
     * @param {Object} product
     */
    _processProduct: function(product) {
        product.tags = product.tags.split(this.TAG_SPLITTER).map(tag => tag.trim());

        return product;
    },

    /**
     * Removes the project with given id from store.
     *
     * @param id
     */
    remove: function(id) {
        // Out of scope
    },

    /**
     * Filters the products content by given set of tags.
     *
     * @param {String[]} filter
     */
    filter: function(filter) {
        this.emit('change', this._products.filter((product) =>
            utils.hasAll(product.tags, filter)
        ))
    },

    /**
     * Returns the full products seria.
     *
     * @returns {Object[]}
     */
    getProducts: function() {
        return this._products;
    }
};

module.exports = new ProductStore();