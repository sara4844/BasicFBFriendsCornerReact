/**
 * Created by Sa on 6/11/2016.
 */
var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppConstants = require("../constants/AppConstants");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");

//Internal object of profiles
// {usernameK => [{obj1}, obj2, obj3, ...],
//  usernameL => [obj1, obj2, ...],
//  ...}
var _profiles = new Map();
var addProfile = function (item) {
    var key = "";
    //lookup the username in item. Item will always have a key and an obj
    for (var i in item) {
        key = i;
    }
    //if there is already a user with that username, append new user to the list of associated profiles
    if (_profiles.get(key)){
        _profiles.get(key).concat([item[key]]);
    } else {
        _profiles.set(key, [item[key]]);
    }

    console.log(_profiles.get(key));
}

//Merge the store with Node's Event Emitter
var ProfileBookStore = assign({}, EventEmitter.prototype, {

    //getter returns profiles
    getProfiles: function(user) {
        return _profiles.get(user);
    },

    emitChange: function(){
        this.emit("change");
    },

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeChangeListener('change', callback);
    }
});

// Register dispatcher callback
AppDispatcher.register(function (payload) {
    var action = payload.action;

    // Define what to do for certain actions
    switch (action.actionType) {
        //case ShoeConstants.LOAD_SHOES:
        //loadShoes(action.data);
        //break;
        case AppConstants.ADD_ITEM:
            addProfile(action.data);
            break;
        default:
            return true;

    }
    // If action was acted upon, emit change event
    ProfileBookStore.emitChange();

    return true;
});

module.exports = ProfileBookStore;
