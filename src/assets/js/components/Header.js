var React = require('react');

var Header = React.createClass({

	render:function(){
		return (
			<div className="row sticky-header">
				<div className="col-md-2 jira-logo">
					JIRA Sticky Notes
				</div>
			</div>
		);
	}
});

module.exports = Header