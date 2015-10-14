var React = require('react');
var C = require('../constants');

var ProductInfo = require('./ProductInfo');
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
            backgroundImage: 'url(' + (this.props.data.photo || C.PRODUCT_DEFAULTS.PHOTO) + ')'
        };

        return (
            <div className="product col-xs-6 col-md-4 col-lg-3">
                <div className="product__container plate clearfix">
                    <ProductInfo data={this.props.data} />
                    <div className="product__photo" onClick={this._showDetails} style={photoStyle}></div>
                </div>
            </div>
        );
    }
});