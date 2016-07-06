var React = require('react')
var CommonActions = require('../actions/CommonActions')

var StickyNotes = React.createClass({
	render: function(){
		return (
			<div className="col-md-2 col-sm-3 col-xs-9 sticky-notes">
					<div className="col-md-12">
						<div className="row note-header">
							AMPLAT - 4391
						</div>
						<div className="row sticky-content">
							Overview - 
						</div>
					</div>
				<div className="clear-sticky-notes" onClick = {CommonActions.removeNote.bind(this,{arrComp : this.props.arrComp, index: this.props.indexId})} >
					x
				</div>
			</div>
		)
	}
})

module.exports = StickyNotes
