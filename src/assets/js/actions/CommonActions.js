var AppDispatcher = require('../dispatchers/AppDispatcher')
var AppConstants = require('../constants/AppConstants')

var CommonActions = {
	addNote:function(data){
		AppDispatcher.handleAction({
    actionType: AppConstants.ADD_NOTE, 
    data: data
    })
	},
	removeNote:function(data){
		AppDispatcher.handleAction({
			actionType:AppConstants.REMOVE_NOTE,
			data:data
		})
	}
}

module.exports = CommonActions;
