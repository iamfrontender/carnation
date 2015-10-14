var React = require('react');
var C = require('../constants');

var Tags = require('./Tags');
var ProductDetails = require('./ProductDetails');

module.exports = React.createClass({
    displayName: 'Product',

    getDefaultProps: function() {
        return {
            data: C.PRODUCT_DEFAULTS
        }
    },

    _showDetails: function() {
        ProductDetails.component.show(this.props.data);
    },

    render: function() {
        var photoStyle = {
            backgroundImage: 'url(' + this.props.data.photo + ')'
        };

        return (
            <div className="product col-xs-6">
                <div className="product__container plate clearfix">
                    <div className="product__details">
                        <h4 className="product__name" onClick={this._showDetails}>{this.props.data.name}</h4>
                        <p className="product__description text-muted">{this.props.data.description}</p>
                        <Tags tags={this.props.data.tags}/>
                    </div>
                    <div className="product__photo" onClick={this._showDetails} style={photoStyle}></div>
                </div>
            </div>
        );
    }
});