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

    has: function(filter) {
        return utils.has(this.filters, filter);
    },

    add: function(filter) {
        if (!this.has(filter)) {
            this.filters.push(filter);
            this.emit('change', this.getFilters());
        }
    },

    remove: function(filter) {
        if (this.has(filter)) {
            this.filters.splice(this.filters.indexOf(filter), 1);
            this.emit('change', this.getFilters());
        }
    },

    getFilters: function() {
        return this.filters;
    }
};

module.exports = new FilterStore();