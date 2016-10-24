fh-pino-logger
====

[![Build Status](https://travis-ci.org/col1985/fh-pino-logger.svg?branch=master)](https://travis-ci.org/col1985/fh-pino-logger)

Simple implementation of light-weight and fast [Pino Logger](https://github.com/mcollina/pino) for use in RHMAP NodeJS cloud apps. For full API docs please see [here](https://github.com/mcollina/pino).

### Install

```bash
npm i fh-pino-logger --save
```

### Name logger

Set an environment variable `process.env.LOG_NAME` otherwise name defaults to `fh-pino-logger`.

### Setting level

Logging level defaults to `info` when deployed to RHMAP. When working locally logger defaults to `trace`. You set the logger level to what ever you choose simply by

```js
var log = require('fh-pino-logger');

log.level = 'warn'; 
```

This level change event will be recorded in the stdout logs.

### General usage

```js
log.fatal('fatal output');
log.error('error output');
log.warn('warn output');
log.info('info output');
log.debug('debug output');
log.trace('trace output'); 
```

### Pull Requests

Any enhancements or contributions welcome.






