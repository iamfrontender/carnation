var React = require('react');

var filterStore = require('../stores/FilterStore');

module.exports = React.createClass({
    displayName: 'Tags',

    componentDidMount: function() {

    },

    handleClick: function(tag) {
        filterStore.add(tag);
    },

    render: function() {
        var tags = this.props.tags.map(tag => {
            return <div className="tag badge" onClick={this.handleClick.bind(this, tag)} key={tag}>{tag}</div>;
        });

        return (
            <div className="tags">
                {tags}
            </div>
        );
    }
});