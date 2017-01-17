var React = require('react');
var Navigator = require('Navigator');

var Main = (props) => {
    return(
        <div>
            <div>
                <div>
                    <Navigator/>
                    <div className="row">
                        <div className="columns small-4 small-centered">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

module.exports = Main;