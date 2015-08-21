Hexadecimal Color
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to test for a hexadecimal color.


## Installation

``` bash
$ npm install regex-color-hexadecimal
```


## Usage

``` javascript
var re = require( 'regex-color-hexadecimal' );
```

#### re

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to test for a hexadecimal color. 

``` javascript
var bool = re.test( 'ffffff' );
// returns true

bool = re.test( '000' );
// returns false
```


#### re.shorthand

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to test for a shorthand hexadecimal color. 

``` javascript
var bool = re.test( '000' );
// returns true
```


#### re.either

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to test for __either__ a shorthand or full length hexadecimal color. 

``` javascript
var bool = re.test( '474747' );
// returns true

bool = re.test( '000' );
// returns true
```


## Examples

``` javascript
var re = require( 'regex-color-hexadecimal' );

function isHex( value, len ) {
	if ( len === 3 ) {
		return re.shorthand.test( value );
	}
	if ( len === 6 ) {
		return re.test( value );
	}
	return re.either.test( value );
}

console.log( isHex( 'ffffff' ) );
// returns true

console.log( isHex( '474747' ) );
// returns true

console.log( isHex( '0A5BBE', 6 ) );
// returns true

console.log( isHex( '000' ) );
// returns true

console.log( isHex( 'F7b', 3 ) );
// returns true

console.log( isHex( 'abcd' ) );
// returns false

console.log( isHex( '' ) );
// returns false

console.log( isHex( null ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/regex-color-hexadecimal.svg
[npm-url]: https://npmjs.org/package/regex-color-hexadecimal

[travis-image]: http://img.shields.io/travis/kgryte/regex-color-hexadecimal/master.svg
[travis-url]: https://travis-ci.org/kgryte/regex-color-hexadecimal

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/regex-color-hexadecimal/master.svg
[codecov-url]: https://codecov.io/github/kgryte/regex-color-hexadecimal?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/regex-color-hexadecimal.svg
[dependencies-url]: https://david-dm.org/kgryte/regex-color-hexadecimal

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/regex-color-hexadecimal.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/regex-color-hexadecimal

[github-issues-image]: http://img.shields.io/github/issues/kgryte/regex-color-hexadecimal.svg
[github-issues-url]: https://github.com/kgryte/regex-color-hexadecimal/issues
