var React = require('react');
var ReactDOM = require('react-dom');

var ProductInfo = require('./ProductInfo');
var ProductPhoto = require('./ProductPhoto');
var Modal = require('boron/ScaleModal');
var Tags = require('./Tags');

var C = require('../constants');

var exports = {};

var ProductDetails = React.createClass({
    getInitialState: function() {
        return { modalIsOpen: false };
    },

    show: function(product) {
        this.setState(product);

        this.refs.modal.show();
    },

    hide: function() {
        this.setState({});

        this.refs.modal.hide();
    },

    render: function () {
        return (
            <div className="product-details">
                <Modal ref="modal">
                    <button className="modal__close" onClick={this.hide}></button>

                    <ProductPhoto data={this.state} thumbnail={false} />
                    <ProductInfo data={this.state} detailed={true} />
                </Modal>
            </div>
        )
    }
});

exports.component = ReactDOM.render(<ProductDetails />, document.querySelector('.modals'));

module.exports = exports;