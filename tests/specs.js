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
            done();
        });

        obj.fld = 256;
    });

    it('should pass: modify fld value, 2 watchers', function ( done ) {
        var obj = {
            fld: 222
        };

        watch(obj, 'fld', function ( name, oldValue, newValue ) {
            oldValue.should.equal(222);
            newValue.should.equal(333);
        });

        watch(obj, 'fld', function ( name, oldValue, newValue ) {
            oldValue.should.equal(222);
            newValue.should.equal(333);
            done();
        });

        obj.fld = 333;
    });

    it('should pass: modify fld value, 2 watchers', function ( done ) {
        var obj = {
            fld: 222
        };

        watch(obj, 'fld', function ( name, oldValue, newValue ) {
            oldValue.should.equal(222);
            newValue.should.equal(333);
        });

        watch(obj, 'fld', function ( name, oldValue, newValue ) {
            oldValue.should.equal(222);
            newValue.should.equal(333);
            done();
        });

        obj.fld = 333;
    });

    it('should pass: modify fld value, 2 watchers, 1 removed in runtime', function ( done ) {
        var obj = {
                fld: 111
            },
            removedWatcher;

        watch(obj, 'fld', function ( name, oldValue, newValue ) {
            oldValue.should.equal(111);
            newValue.should.equal(222);
            done();
        });

        removedWatcher = watch(obj, 'fld', function ( name, oldValue, newValue ) {
            oldValue.should.equal(111);
            newValue.should.equal(222);
            done();
        });
        removedWatcher.remove();

        obj.fld = 222;
    });

});
