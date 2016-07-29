/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';


// public
module.exports = function ( obj, name, callback ) {
    var oldValue;

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
                callback(name, oldValue, oldValue = newValue);
            }, 0);
        }
    });
};
