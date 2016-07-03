var React=require('react');
var AppDispatcher=require('../dispatchers/AppDispatcher')
var AppConstants=require('../constants/AppConstants')
var objectAssign=require('react/lib/Object.assign')
var EventEmitter=require('events').EventEmitter
var CommonActions=require('../actions/CommonActions')

var flag = false;

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

	getFlag:function(){
		return flag
	},

})

AppDispatcher.register(function(payload){
	var action = payload.action

	switch(action.actionType){

		default:
			return true
	}

})

module.exports = stickyStore