var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function() {
        return {
            title: 'Error'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        errorMessage: React.PropTypes.string.isRequired
    },
    componentDidMount: function() {
        if($('.reveal-overlay').length > 0) {
            $('.reveal-overlay').remove();
        }
        
        var {title,errorMessage} = this.props;
        var modalMarkup = (
            <div ref="errorModal" id="errorModal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{errorMessage}</p>
                <p><button className="button hollow" data-close="">Okay</button></p>
            </div>
        );
        
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);
        
        var modal = new Foundation.Reveal($('#errorModal'));
        modal.open();
    },
    render: function() {
        return(
            <div>
            </div>
        );
    }
});

module.exports = ErrorModal;