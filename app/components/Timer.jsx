var React = require('react');
var Clock = require('Clock');
var TimerForm = require('TimerForm');
var Controls = require('Controls');

var Timer = React.createClass({
    timer: undefined,
    getInitialState: function() {
        return({
            inputSeconds: 0,
            status: 'paused'
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
                        inputSeconds: 0,
                        status: 'paused'
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
            var newInputSeconds = this.state.inputSeconds + 1;
            
            this.setState({
                inputSeconds: newInputSeconds
            });
        }, 1000);
    },
    handleStartTimer: function() {
        this.setState({
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
        
        return(
            <div>
                <Clock inputSeconds={inputSeconds}/>
                <Controls status={status} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
});

module.exports = Timer;

//<TimerForm status={status} onStartTimer={this.handleStartTimer} onStatusChange={this.handleStatusChange}/>