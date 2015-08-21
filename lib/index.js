'use strict';

var ere, sre, re;

ere = /^[0-9A-F]{3}$|^[0-9A-F]{6}$/i;
/*
	Match any 3 or 6 letter character sequence only containing numbers or the letters A-Fa-f.

	/^
		-	match anything that begins with
	[0-9A-F]
		-	match anything that contains the numbers 0-9 and/or the letters A-F
	{3}
		-	exactly 3 matched characters
	$
		-	end of character sequence
	|
		-	OR
	^
		-	match anything that begins with
	[0-9A-F]
		-	(same as above)
	{6}
		-	exactly 6 matched characters
	$
		-	end of character sequence
	/i
		-	ignore case
*/

// Same as above but only for 3 letter sequences:
sre = /^[0-9A-F]{3}$/i;

// Same as above but only for 6 letter sequences:
re = /^[0-9A-F]{6}$/i;


// EXPORTS //

module.exports = re;
module.exports.either = ere;
module.exports.shorthand = sre;
