/*
 * Copyright 2013, All Rights Reserved.
 *
 * Code licensed under the BSD License:
 * https://github.com/node-gh/gh/blob/master/LICENSE.md
 *
 * @author Author <email@email.com>
 */

'use strict';

// -- Requires -------------------------------------------------------------------------------------

var util = require('util'),
    logger = require('../logger'),
    Test = require('./test').Impl;

// -- Constructor ----------------------------------------------------------------------------------

function TestExt() {
    Test.call(this);

    console.log('TestExt');
    // console.log(TestExt.superclass.constructor.apply(this));
    // TestExt.superclass.constructor.apply(this);
}

util.inherits(TestExt, Test);

// -- Constants ------------------------------------------------------------------------------------

TestExt.DETAILS = {
    alias: 'tex',
    description: 'TestExt world example. Copy to start a new command.',
    commands: [
        'foo',
        'bar'
    ],
    options: {
        'foo': Boolean,
        'bar': Boolean
    },
    shorthands: {
        'w': ['--world']
    },
    payload: function(payload, options) {
        options.foo = true;
    }
};

// -- Commands -------------------------------------------------------------------------------------

// TestExt.prototype.run = function() {
//     var instance = this,
//         options = instance.options;

//     if (options.foo) {
//         instance.foo();
//     }

//     if (options.bar) {
//         instance.bar();
//     }
// };

TestExt.prototype.foo = function() {
    logger.log('hello foo :)');
};

TestExt.prototype.bar = function() {
    logger.log('hello bar :)');
};

exports.Impl = TestExt;
