// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    If F contains any character other than 'g', 'i', or 'm', or if it
    contains the same one more than once, then throw a SyntaxError exception
es5id: 15.10.4.1_A5_T9
description: >
    Checking if using "{toString:function(){}}" as F leads to throwing
    the correct exception
---*/

//CHECK#1
try {
	throw new Test262Error('#1.1: new RegExp("$sup",{toString:function(){}}) throw SyntaxError. Actual: ' + (new RegExp("$sup",{toString:function(){}})));
} catch (e) {
	if ((e instanceof SyntaxError) !== true) {
		throw new Test262Error('#1.2: new RegExp("$sup",{toString:function(){}}) throw SyntaxError. Actual: ' + (e));
	}
}
