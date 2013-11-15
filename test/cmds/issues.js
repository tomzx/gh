/*
 * Copyright 2013, All Rights Reserved.
 *
 * Code licensed under the BSD License:
 * https://github.com/node-gh/gh/blob/master/LICENSE.md
 *
 * @author Eduardo Lundgren <eduardo.lundgren@gmail.com>
 */

'use strict';

// -- Requires -------------------------------------------------------------------------------------

// var Q = require('q'),
//     base = require('../../lib/base'),
//     IssueImpl = require('../../lib/cmds/issue').Impl;

var expect = require('chai').expect;

// -- Suites ---------------------------------------------------------------------------------------

describe('Issues', function() {

    // lazy('options', function() {
    //     return {
    //         argv: {
    //             remain: ['is'],
    //             cooked: ['is'],
    //             original: ['is']
    //         },
    //         remote: 'origin',
    //         loggedUser: 'eduardolundgren',
    //         remoteUser: 'node-gh',
    //         user: 'node-gh',
    //         repo: 'gh',
    //         currentBranch: 'master',
    //         list: true
    //     };
    // });

    // lazy('issue', function(options) {
    //     return new IssueImpl(options);
    // });

    it('list the issues', function() {
        var foo = 'bar',
            beverages = {
                tea: ['chai', 'matcha', 'oolong']
            };

        // expect(foo).to.be.a('string');
        // expect(foo).to.equal('bar');
        // expect(foo).to.have.length(3);
        // expect(beverages).to.have.property('tea').with.length(3);

        expect(foo).a('string');
        expect(foo).equal('bar');
        expect(foo).length(3);
        expect(beverages).property('tea').length(3);

        // sinon.stub(base.github.issues, 'repoIssues', function(payload, callback) {
        //     callback(null, [{title:'123'}]);
        // });

        // console.log(base.github.issues.repoIssues());

        // return Q.ninvoke(issue, 'list', options.user, options.repo).then(function(result) {
        // console.log(arguments);
        // });
    });

});
