var React = require('react')
var Header = require('./Header')
var AddButton = require('./AddButton')
var StickyContainer = require('./StickyContainer')
var StickyStore =  require('../stores/stickyStore')

function getStateData(){
	return {
		//stickyNoteFlagCount : StickyStore.getFlag(),
    stickyComponent : StickyStore.getStickyComponent()
	}
}

var StickyApp = React.createClass({
	getInitialState: function(){
		return getStateData()
	},

  componentWillMount: function(){
    StickyStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function(){
    StickyStore.removeChangeListener(this.onChange);
  },
  onChange: function(){ 
    this.setState(getStateData());
  },


  render: function() { 
    return (
    	<div className="">
	        <Header />
          <AddButton />
          <StickyContainer stickyComponent={this.state.stickyComponent}/>
      </div>
    )
  }
})

module.exports = StickyApp
