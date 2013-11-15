/*
 * Copyright 2013, All Rights Reserved.
 *
 * Code licensed under the BSD License:
 * https://github.com/node-gh/gh/blob/master/LICENSE.md
 *
 * @author Eduardo Lundgren <eduardolundgren@gmail.com>
 */

'use strict';

// -- Requires -------------------------------------------------------------------------------------

var EventEmitter = require('events').EventEmitter;
var util = require('util');

// -- Constructor ----------------------------------------------------------------------------------

/*
 * Abstract class for command. Provides reporter support and event emitter
 * abilities.
 *
 * @class Command
 * @extends EventEmitter
 */

function Command() {
    EventEmitter.call(this);

    this.DETAILS = this.constructor.DETAILS;
}

util.inherits(Command, EventEmitter);

/**
 * Command options for the class.
 *
 * @property options
 * @type Object
 * @default null
 */
Command.prototype.options = null;

/**
 * Reporter handler for the class.
 *
 * @property reporter
 * @type Reporter
 * @default null
 */
Command.prototype.reporter = null;

/**
 * Default runner for the command. Responsible for queue, emit events and invoke
 * command flags, e.g. `gh command --foo --bar` is a command with two command
 * flags. Thus, the execution flow first emits `before:command:foo` event, then
 * invoke `command.foo()` and finally emits `after:command:foo` event. The same
 * flow is repeated for `--bar`.
 *
 * @method run
 * @return {Command} @return Returns itself.
 * @protected
 */
Command.prototype.run = function() {
    var instance = this;

    instance.forEachCommand_(function(command) {
        var commandDefaultFn = instance[command];

        if (instance.options[command]) {
            commandDefaultFn();
        }
    });

    return this;
};

/**
 * Loops the command flags respecting the command line order.
 *
 * @method forEachCommand_
 * @param {Function} A callback function.
 * @private
 */
Command.prototype.forEachCommand_ = function(callback) {
    var commands = this.DETAILS.commands.concat();
    commands.sort(this.commandArgvCompare_);
    commands.forEach(callback);
};

/**
 * Compares its two arguments for order, using the subtraction operation from
 * the index they appear on `process.argv`. Sort the commands execution order to
 * respect the command line order.
 *
 * @method commandArgvCompare_
 * @param {a} a The first object to be compared.
 * @param {b} b The second object to be compared.
 * @return {number} A negative number, zero, or a positive number as the first
 *     argument is less than, equal to, or greater than the second.
 * @private
 */
Command.prototype.commandArgvCompare_ = function(a, b) {
    return process.argv.indexOf('--' + a) - process.argv.indexOf('--' + b);
};

/**
 * Provides a fluent interface to set the options for the command.
 *
 * @example
 *
 * ```
 * new Command()
 *     .withOptions(options)
 *     .run();
 * ```
 *
 * @method withOptions
 * @param options {Object} Object containing the command options.
 */
Command.prototype.withOptions = function(options) {
    this.options = options;
    return this;
};

/**
 * Provides a fluent interface to set the reporter handler for the command.
 *
 * @example
 *
 * ```
 * new Command()
 *     .withReporter(new Reporter())
 *     .run();
 * ```
 *
 * @method withReporter
 * @param reporter {Reporter} Reporter handler.
 */
Command.prototype.withReporter = function(reporter) {
    this.reporter = reporter;
    return this;
};

exports.Command = Command;
