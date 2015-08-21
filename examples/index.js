'use strict';

var re = require( './../lib' );

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
