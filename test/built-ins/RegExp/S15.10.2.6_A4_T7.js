// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The production Assertion :: \B evaluates by returning an internal
    AssertionTester closure that takes a State argument x and performs the ...
es5id: 15.10.2.6_A4_T7
description: >
    Execute /\B[^z]{4}\B/.exec("devil arise\tforzzx\nevils") and
    check results
---*/

var __executed = /\B[^z]{4}\B/.exec("devil arise\tforzzx\nevils");

var __expected = ["il a"];
__expected.index = 3;
__expected.input = "devil arise\tforzzx\nevils";

//CHECK#1
if (__executed.length !== __expected.length) {
	throw new Test262Error('#1: __executed = /\B[^z]{4}\B/.exec("devil arise\\tforzzx\\nevils"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	throw new Test262Error('#2: __executed = /\B[^z]{4}\B/.exec("devil arise\\tforzzx\\nevils"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	throw new Test262Error('#3: __executed = /\B[^z]{4}\B/.exec("devil arise\\tforzzx\\nevils"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		throw new Test262Error('#4: __executed = /\B[^z]{4}\B/.exec("devil arise\\tforzzx\\nevils"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}
