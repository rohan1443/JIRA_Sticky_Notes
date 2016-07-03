var React = require('react');
var ReactDOM = require('react-dom');

var StickyApp = require('./components/StickyApp'); 

var App = React.createClass({
  getInitialState: function(){
    return null;
  },
  render: function(){
    return (
      <div className="container-fluid body-container">
        <StickyApp />
      </div>
    );
  }
});


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
