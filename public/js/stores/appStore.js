var AppDispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/appConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
/**
function addItem(id){
    document.getElementById('addit').innerHTML(id);
}**/