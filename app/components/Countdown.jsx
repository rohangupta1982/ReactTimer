var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function() {
        return({
            inputSeconds: 0,
            status: 'stopped'
        });
    },
    componentDidUpdate: function(prevProps, prevState) {
        if(this.state.status !== prevState.status) {
            switch(this.state.status) {
                case 'started': {
                    this.startTimer();
                    break;
                }
                case 'stopped': {
                    this.setState({
                        inputSeconds: 0
                    });
                }
                case 'paused': {
                    clearInterval(this.timer);
                    this.timer = undefined;
                }
            }
        }
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newInputSeconds = this.state.inputSeconds - 1;
            
            if(newInputSeconds < 0) {
                clearInterval(this.timer);
            }
            
            this.setState({
                inputSeconds: newInputSeconds > 0 ? newInputSeconds : 0,
                status: newInputSeconds > 0 ? 'started' : 'stopped'
            });
        }, 1000);        
    },
    handleStartCountdown: function(inputSeconds) {
        this.setState({
            inputSeconds: inputSeconds,
            status: 'started'
        });        
    },
    handleStatusChange: function(newStatus) {
        this.setState({
            status: newStatus
        });
    },
    componentWillUnmount: function() {
        if(this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    },
    render: function() {
        var {inputSeconds, status} = this.state;
        
        var renderStatusButtons = () => {
            if(status.length > 0) {
                switch(status) {
                    case 'stopped':
                        return(
                            <CountdownForm onStartCountdown={this.handleStartCountdown}/>
                        );
                    default:
                        return(
                            <Controls status={status} onStatusChange={this.handleStatusChange}/>
                        );
                }
            }
        };
        
        return(
            <div>
                <Clock inputSeconds={inputSeconds}/>
                {renderStatusButtons()}                
            </div>
        );
    }
});

module.exports = Countdown;