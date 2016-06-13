/**
 * Created by Sa on 6/11/2016.
 */
var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppConstants = require("../constants/AppConstants");

var AppActions = {
    addProfile: function(item){
        AppDispatcher.handleAction({
            actionType: AppConstants.ADD_ITEM,
            data: item
        });
    },
};

module.exports = AppActions;