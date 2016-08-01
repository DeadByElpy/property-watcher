Watches for a property modifications
====================================

[![NPM version](https://img.shields.io/npm/v/cjs-property-watcher.svg?style=flat-square)](https://www.npmjs.com/package/cjs-property-watcher)
[![Dependencies Status](https://img.shields.io/david/cjssdk/property-watcher.svg?style=flat-square)](https://david-dm.org/cjssdk/property-watcher)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/cjssdk)
[![Build Status](https://travis-ci.org/cjssdk/property-watcher.svg)](https://travis-ci.org/cjssdk/property-watcher)


## Installation ##

```bash
npm install cjs-property-watcher
```


## Usage ##

Add to the scope:

```js
var watch = require('cjs-property-watcher');
```

Add hook for an object property:

```js
var obj = {
    fld: 123
};

watch(obj, 'fld', function ( name, oldValue, newValue ) {
    console.log('obj.' + name + ' changed from ' + oldValue + ' to ' + newValue);
});
```

Trigger the hook with property modification:

```js
obj.fld = 256;
```


## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problem or suggestion please open an issue [here](https://github.com/cjssdk/property-watcher/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License ##

`cjs-property-watcher` is released under the [MIT License](license.md).
