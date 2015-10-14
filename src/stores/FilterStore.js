var utils = require('../utils');

/**
 * Store for product filters.
 *
 * @constructor
 * @singleton
 */
var FilterStore = function() {
    this.listeners = {};
    this.filters = [];
};

/**
 * @prototype
 */
FilterStore.prototype = {
    /**
     * Registers listener for given event.
     *
     * @param {String} event name
     * @param {Function} listener
     */
    on: function(event, listener) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(listener);
    },

    /**
     * Emits the given event.
     *
     * @param {String} event
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
     * Checks whether this store has given filter or not.
     *
     * @param {String} filter
     */
    has: function(filter) {
        return utils.has(this.filters, filter);
    },

    /**
     * Adds given filter to store.
     *
     * @param {String} filter
     */
    add: function(filter) {
        if (!this.has(filter)) {
            this.filters.push(filter);
            this.emit('change', this.getFilters());
        }
    },

    /**
     * Removes given filter from store.
     *
     * @param {String} filter
     */
    remove: function(filter) {
        if (this.has(filter)) {
            this.filters.splice(this.filters.indexOf(filter), 1);
            this.emit('change', this.getFilters());
        }
    },

    /**
     * Returns all current filters.
     *
     * @returns {String[]}
     */
    getFilters: function() {
        return this.filters;
    }
};

module.exports = new FilterStore();