var React=require('react');
var AppDispatcher=require('../dispatchers/AppDispatcher')
var AppConstants=require('../constants/AppConstants')
var objectAssign=require('react/lib/Object.assign')
var EventEmitter=require('events').EventEmitter
var CommonActions=require('../actions/CommonActions')
var StickyNotes = require('../components/StickyNotes')

//var flag = false;
var stickyComponent = [];
var CHANGE_EVENT = 'change';


var stickyStore = objectAssign({},EventEmitter.prototype,{
	emitChange:function() {
		this.emit(CHANGE_EVENT)
	},

	addChangeListener:function(cb) {
		this.on(CHANGE_EVENT, cb)
	},

	removeChangeListener:function() {
		this.removeListener(CHANGE_EVENT,cb)
	},
	/*setFlag: function(){
		flag = true
	},
	getFlag:function(){
		return flag
	},*/
	setStickyComponent:function(){
			stickyComponent.push(<StickyNotes arrComp={stickyComponent} indexId={stickyComponent.length} />);
	},
	getStickyComponent:function(){
		return stickyComponent;
	},
	removeStickyNote:function(data){
		if(stickyComponent.length !== 0){
			console.log(data.index);
			stickyComponent.splice(data.index,1);
			console.log(stickyComponent);	
		}
		else{
			alert("Please Add a NOTE");
		}
		
	}

})

AppDispatcher.register(function(payload){
	var action = payload.action

	switch(action.actionType){
		case AppConstants.ADD_NOTE:
		//stickyStore.setFlag(action.data);
		stickyStore.setStickyComponent(action.data);
		stickyStore.emit(CHANGE_EVENT);
		break;

		case AppConstants.REMOVE_NOTE:
		stickyStore.removeStickyNote(action.data);
		stickyStore.emit(CHANGE_EVENT);
		break;

		default:
			return true
	}

})

module.exports = stickyStore