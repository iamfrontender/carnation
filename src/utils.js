var utils = {
    noop: function() {

    },
    has: function(arr, item) {
        return arr.indexOf(item) !== -1;
    },

    hasAll: function(arr, items) {
        var has = true;

        items.forEach(item => {
            has = has && utils.has(arr, item);
        });

        return has;
    }
};

module.exports = utils;