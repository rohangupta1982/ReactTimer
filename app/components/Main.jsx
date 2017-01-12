var React = require('react');
var Navigator = require('Navigator');

var Main = (props) => {
    return(
        <div>
            <div>
                <div>
                    <Navigator/>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;