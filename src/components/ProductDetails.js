var React = require('react');
var ReactDOM = require('react-dom');

var Modal = require('boron/ScaleModal');
var Tags = require('./Tags');

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
        this.refs.modal.hide();
    },

    render: function () {
        return (
            <div className="product-details">
                <Modal ref="modal">
                    <div className="">
                        <img src={this.state.photo} alt={this.state.title}/>
                    </div>

                    <button className="modal__close" onClick={this.hide}></button>

                    <div className="">
                        <h4>{this.state.name}</h4>
                        <p className="text-muted">{this.state.description}</p>
                        <Tags tags={this.state.tags}/>
                    </div>

                </Modal>
            </div>
        )
    }
});

exports.component = ReactDOM.render(<ProductDetails />, document.querySelector('.modals'));

module.exports = exports;