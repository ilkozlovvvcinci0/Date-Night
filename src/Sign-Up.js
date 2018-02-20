var FaBeer = require('react-icons/lib/fa/beer');
 
var Question = React.createClass({
    render: function() {
        return React.createElement('h3', null,
            ' Lets go for a ', React.createElement(FaBeer, null), '? '
        );
    }
});