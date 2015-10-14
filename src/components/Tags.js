var React = require('react');

var utils = require('../utils');
var filterStore = require('../stores/FilterStore');

module.exports = React.createClass({
    displayName: 'Tags',

    getDefaultProps: function() {
        return {
            triggerable: false
        }
    },

    handleClick: function(tag) {
        filterStore.add(tag);
    },

    render: function() {
        var tags = this.props.tags.map(tag => {
            return (
            <div className="tag badge" onClick={
                this.props.triggerable ? this.handleClick.bind(this, tag) : utils.noop
            } key={tag}>{tag}</div>
            );
        });

        return (
            <div className="tags">
                {tags}
            </div>
        );
    }
});