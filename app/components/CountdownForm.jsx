var React = require('react');

var CountdownForm = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var inputSeconds = this.refs.inputSeconds.value;
        
        if(inputSeconds.match(/^[0-9]*$/)) {
            this.props.onStartCountdown(Number(inputSeconds));
        }
        this.refs.inputSeconds.value = '';
    },
    render: function() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input type="text" ref="inputSeconds" placeholder="Enter time in seconds"/>
                    </div>
                    <div>
                        <button className="button expanded">Start</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;