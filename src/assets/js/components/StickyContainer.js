var React = require('react');
var StickyNotes = require('./StickyNotes')

var StickyContainer = React.createClass({
	render: function(){
		return (
			<div className="row sticky-container">
				{this.props.stickyComponent}
			</div>
		)
	}
})

module.exports = StickyContainer