// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: let P be ToString(pattern) and let F be ToString(flags)
es5id: 15.10.4.1_A8_T8
description: >
    Pattern is {toString:function(){throw "intostr";} } and flags is
    "error"
---*/

//CHECK#1
try {
	throw new Test262Error('#1.1: new RegExp({toString:function(){throw "intostr";}}, "error") throw "intostr". Actual: ' + (new RegExp({toString:function(){throw "intostr";}}, "error")));
} catch (e) {
	if (e !== "intostr" ) {
		throw new Test262Error('#1.2: new RegExp({toString:function(){throw "intostr";}}, "error") throw "intostr". Actual: ' + (e));
	}
}
