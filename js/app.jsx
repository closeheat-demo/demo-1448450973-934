// You can require external packages here and it'll download it automatically
var React = require('react');
var Heading = require('./components/heading');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Heading/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
