/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	re = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'regex-color-hexadecimal', function tests() {

	it( 'should export a regular expression', function test() {
		assert.isTrue( re instanceof RegExp );
	});

	it( 'should export a regular expression for shorthand hex colors', function test() {
		assert.isTrue( re.shorthand instanceof RegExp );
	});

	it( 'should export a regular expression for both shorthand and combined hex colors', function test() {
		assert.isTrue( re.either instanceof RegExp );
	});

	it( 'should detect a valid hexadecimal color', function test() {
		var values = [
			'ffffff',
			'000000',
			'474747',
			'ababab',
			'e0e0e0',
			'd7d4bd',
			'FFFFFF',
			'EEEECA',
			'EAeac4'
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( re.test( values[i] ), values[i] );
		}
	});

	it( 'should detect a valid shorthand hexadecimal color', function test() {
		var values = [
			'fff',
			'000',
			'474',
			'aba',
			'e0e',
			'd7e',
			'FFF',
			'ACe'
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( re.shorthand.test( values[i] ), values[i] );
		}
	});

	it( 'should detect either a valid shorthand or full length hexadecimal color', function test() {
		var values = [
			'ffffff',
			'fff',
			'000000',
			'000',
			'474747',
			'474',
			'ababab',
			'aba',
			'e0e0e0',
			'e0e',
			'd7ebb3',
			'd7e',
			'FFFFFF',
			'FFF',
			'ACebb5',
			'ACe'
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isTrue( re.either.test( values[i] ), values[i] );
		}
	});

	it( 'should detect an invalid hexadecimal color', function test() {
		var values = [
			'fffff',
			'0000000',
			'4747',
			'ababaz',
			'beep',
			'boop',
			'ggg',
			'GGGGGG',
			'A7bb-1',
			'######',
			'#aaaaaa'
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isFalse( re.test( values[i] ), values[i] );
		}
	});

	it( 'should detect an invalid shorthand hexadecimal color', function test() {
		var values = [
			'ff',
			'0000',
			'474747',
			'ababaa',
			'ffffff',
			'boop',
			'ggg',
			'GGG',
			'A-b',
			'###',
			'#aaa'
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isFalse( re.shorthand.test( values[i] ), values[i] );
		}
	});

	it( 'should detect either an invalid shorthand or invalid full length hexadecimal color', function test() {
		var values = [
			'fffffz',
			'fffP',
			'000000)',
			'00-',
			'474z47',
			'#474',
			'abab',
			'aba2',
			'e0e0e0e',
			'##e0e',
			'beeper',
			'zzz',
			'FFFFFFF',
			'FFFF',
			'ACebb5-',
			'A-Ce'
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isFalse( re.either.test( values[i] ), values[i] );
		}
	});

});
