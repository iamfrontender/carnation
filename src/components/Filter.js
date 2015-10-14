var React = require('react');

var filterStore = require('../stores/FilterStore.js');

module.exports = React.createClass({
    displayName: 'Filter',

    getInitialState: function() {
        return {
            filters: filterStore.getFilters()
        }
    },

    componentDidMount: function() {
        this.listeners();
    },

    listeners: function() {
        filterStore.on('change', this._updateStateFromStore);
    },

    _triggerRemove: function(filter) {
        filterStore.remove(filter);
    },

    _updateStateFromStore: function() {
        this.setState({
            filters: filterStore.getFilters()
        });
    },

    render: function() {
        var filters = this.state.filters.map(filter => {
            return (
                <div className="filter badge" key={filter}>
                    {filter}
                    <span className="filter__remove" onClick={this._triggerRemove.bind(this, filter)}></span>
                </div>
            )
        });

        return <div className="filters">{filters}</div>
    }
});
