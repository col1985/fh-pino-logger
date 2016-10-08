 'use strict';

 var pino = require('pino');
 var pretty = pino.pretty();

 // format output
 pretty.pipe(process.stdout, {
     timeTransOnly: true,
 });

 // create instance
 var LOG = pino({
     name: process.env.LOG_NAME || 'fh-pino-logger',
     safe: true,
     level: 'info',
     serializers: {
         req: pino.stdSerializers.req,
         res: pino.stdSerializers.res
     }
 }, pretty);

 LOG.on('level-change', function(lvl, val, prevLvl, prevVal) {
     console.log('***************************************************');
     console.log('fh-pino-logger: level change to "%s" from "%s"', lvl, prevLvl);
     console.log('***************************************************');
 });

 // set level to debug for local dev
 if (!process.env.FH_ENV) LOG.level = 'trace';

 module.exports = LOG;