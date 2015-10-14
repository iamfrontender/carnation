var React = require('react');
var C = require('../constants');

var utils = require('../utils');

module.exports = React.createClass({
    getDefaultProps: function() {
        return {
            onClick: utils.noop,
            thumbnail: false
        };
    },

    render: function() {
        var photoURL = this.props.data.photo || C.PRODUCT_DEFAULTS.PHOTO;

        if (this.props.thumbnail) {
            var photoStyle = {
                backgroundImage: 'url(' + photoURL + ')'
            };

            return (
                <div className="product__photo--thumbnail" onClick={this.props.onClick} style={photoStyle}></div>
            );
        } else {
            return (
                <div className="product__photo">
                    <img src={photoURL} alt={this.props.data.title}/>
                </div>
            );
        }
    }
});