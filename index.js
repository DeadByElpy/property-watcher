/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';


var watchers  = {},
    objectMap = [];


// public
module.exports = function ( obj, name, callback ) {
    var index = objectMap.indexOf(obj),
        defineNeed = true,
        callbackIndex, oldValue;

    if ( index === -1 ) {
        index = objectMap.push(obj) - 1;
    }

    if ( !watchers[index] ) {
        watchers[index] = {};
    }

    if ( watchers[index][name] ) {
        defineNeed = false;
    } else {
        watchers[index][name] = [];
    }

    callbackIndex = watchers[index][name].push(callback) - 1;

    // save old value before redefinition
    oldValue = obj[name];

    if ( defineNeed ) {
        // wrap the given property
        Object.defineProperty(obj, name, {
            get: function () {
                return oldValue;
            },

            set: function ( newValue ) {
                // apply and notify
                setTimeout(function () {
                    var watcherIndex = 0,
                        size = watchers[index][name].length;

                    while ( watcherIndex < size ) {
                        watchers[index][name][watcherIndex](name, oldValue, newValue);
                        ++watcherIndex;
                    }
                    oldValue = newValue;
                }, 0);
            }
        });
    }

    return {
        remove: function () {
            watchers[index][name].splice(callbackIndex, 1);
        }
    };
};
