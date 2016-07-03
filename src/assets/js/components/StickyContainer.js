var React = require('react');
var StickyNotes = require('./StickyNotes')

var _stickyComponent;

var StickyContainer = React.createClass({
	render: function(){
		if(this.props.flagStat === false)
			_stickyComponent = null;
		else{
			_stickyComponent = <StickyNotes />
		}
		return (
			<div className="row sticky-container">
				{_stickyComponent}
			</div>
		)
	}
})

module.exports = StickyContainer