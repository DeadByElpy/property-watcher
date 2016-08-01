/**
 * Mocha tests.
 *
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

/* eslint-env mocha */

var should = require('should'),
    watch  = require('../index');


describe('main', function () {

    it('should pass: modify fld value', function ( done ) {
        var obj = {
            fld: 128
        };

        watch(obj, 'fld', function ( name, oldValue, newValue ) {
            name.should.equal('fld');
            oldValue.should.equal(128);
            newValue.should.equal(256);
            console.log('done');
            done();
        });

        obj.fld = 256;
    });

});
