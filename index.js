/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';


var watchers = {},
    objectMap = [];


// public
module.exports = function ( obj, name, callback ) {
    var index = objectMap.indexOf(obj),
        callbackIndex, oldValue;
    
    if ( index === -1 ) {
        index = objectMap.push(obj) - 1;
    }
    
    if ( !watchers[index] ) {
        watchers[index] = {};
    }

    if ( !watchers[index][name] ) {
        watchers[index][name] = [];
    }
    
    callbackIndex = watchers[index][name].push(callback) - 1;

    // save old value before redefinition
    oldValue = obj[name];

    // wrap the given property
    Object.defineProperty(obj, name, {
        get: function () {
            return oldValue;
        },

        set: function ( newValue ) {
            // apply and notify
            setTimeout(function () {
                var i = 0,
                    size = watchers[index][name].length;
                
                while ( i < size ) {
                    watchers[index][name][i](name, oldValue, oldValue = newValue);
                    ++i;
                }
            }, 0);
        }
    });
    
    return {
        remove: function () {
            watchers[index][name].splice(callbackIndex, 1);
        }
    };
};
