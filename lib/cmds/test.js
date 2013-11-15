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
    Command = require('../command').Command;

// -- Constructor ----------------------------------------------------------------------------------

function Test() {
    Command.call(this);
}

util.inherits(Test, Command);

// -- Constants ------------------------------------------------------------------------------------

Test.DETAILS = {
    name: 'test',
    alias: 'te',
    description: 'Test world example. Copy to start a new command.',
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

// Test.prototype.run = function() {
//     var instance = this,
//         options = instance.options;

//     if (options.foo) {
//         instance.foo();
//     }

//     if (options.bar) {
//         instance.bar();
//     }
// };

Test.prototype.foo = function() {
    logger.log('hello foo :)');
};

Test.prototype.bar = function() {
    logger.log('hello bar :)');
};

exports.Impl = Test;
