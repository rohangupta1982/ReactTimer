var React = require("react");

var TimerForm = React.createClass({
    // onSubmit: function(e) {
    //     e.preventDefault();
    //     this.props.onStartTimer();
    // },
    onStatusChange: function(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function() {
        var {status} = this.props; 
        
        var renderStatusButtons = () => {
            if(status.length > 0) {
                switch(status) {
                    case 'started':
                        return(
                            <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
                        );
                    case 'paused':
                        return(
                            <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
                        );
                    case 'stopped':
                        return(
                            <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
                        );
                } 
            }
        };
        
        return(
            <div className="controls">
                {renderStatusButtons()}
                <button className="button hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        )
    }
});

module.exports = TimerForm;

// <form onSubmit={this.onSubmit}>
//                     {renderStatusButtons()}
//                     <button className="button hollow">Clear</button>
//                 </form>