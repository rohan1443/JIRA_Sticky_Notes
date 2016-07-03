var React = require('react')
var Header = require('./Header')
var AddButton = require('./AddButton')
var StickyContainer = require('./StickyContainer')
var StickyStore =  require('../stores/stickyStore')

function getState(){
	return {
		stickyNoteFlagCount : StickyStore.getFlag()
	}
}

var StickyApp = React.createClass({
	getInitialState: function(){
		return getState();
	},

  render: function() { 
    return (
    	<div className="">
	        <Header />
          <AddButton />
          <StickyContainer flagStat={this.state.stickyNoteFlagCount} />
      </div>
    )
  }
})

module.exports = StickyApp
