var React = require('react');
var CommonActions = require('../actions/CommonActions')

var AddButton = React.createClass({

	render:function(){
		return (
			<div className="draggable-button" onClick={CommonActions.addNote} >
				+
			</div>
		)
	}
})

module.exports = AddButton