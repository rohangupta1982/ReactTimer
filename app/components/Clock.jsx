var React = require('react');

var Clock = React.createClass({
    getDefaultProps: function() {
        return({
            inputSeconds: 0
        });
    },
    propTypes: {
        inputSeconds: React.PropTypes.number
    },
    formatSeconds: function(inputSeconds) {
        var minutes = 0;
        var seconds = 0;
        
        if(typeof inputSeconds === 'number' && inputSeconds >= 0) {
            minutes = Math.floor(inputSeconds / 60);
            seconds = inputSeconds % 60;
        }
        
        if(minutes < 10) {
            minutes = `0${minutes}`;
        }
        if(seconds < 10) {
            seconds = `0${seconds}`;
        }
        
        return `${minutes}:${seconds}`;
    },
    render: function() {
        var {inputSeconds} = this.props;
        
        return (
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(inputSeconds)}
                </span>
            </div>
        );
    }
});

module.exports = Clock;