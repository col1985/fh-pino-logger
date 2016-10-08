'use strict';

describe('Return instance of fh-pino-logger.', function() {
    var log = require('./../index');

    describe('Output should:', function() {

        it('return fatal..', function(done) {
            log.fatal('fh-pino-logger fatal');
            done();
        });

        it('return error..', function(done) {
            log.error('fh-pino-logger error');
            done();
        });

        it('return warn..', function(done) {
            log.warn('fh-pino-logger warn');
            done();
        });

        it('return info..', function(done) {
            log.info('fh-pino-logger info');
            done();
        });

        it('return debug..', function(done) {
            log.debug('fh-pino-logger debug');
            done();
        });

        it('return trace..', function(done) {
            log.trace('fh-pino-logger trace');
            done();
        });
    });

    describe('setting fh-pino-logger level', function() {
        it('should print output to stdout', function() {
            log.level = 'warn';
        });
    });
});