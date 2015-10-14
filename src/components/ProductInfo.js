var React = require('react');
var Tags = require('./Tags');


module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            detailed: false
        };
    },

    render: function() {
        if (this.props.detailed) {
            return (
                <div className="product__info--detailed">
                    <h4>{this.props.data.name}</h4>
                    <p className="text-muted">{this.props.data.description}</p>
                    <Tags tags={this.props.data.tags}/>
                </div>
            );
        } else {
            return (
                <div className="product__info">
                    <h4>{this.props.data.name}</h4>
                    <Tags tags={this.props.data.tags} triggerable={true}/>
                </div>
            );
        }
    }
});