// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The production Assertion :: \b evaluates by returning an internal
    AssertionTester closure that takes a State argument x and performs the ...
es5id: 15.10.2.6_A3_T10
description: >
    Execute /\brobot\b/.exec("pilot\nsoviet robot\topenoffice") and
    check results
---*/

var __executed = /\brobot\b/.exec("pilot\nsoviet robot\topenoffice");

var __expected = ["robot"];
__expected.index = 13;
__expected.input = "pilot\nsoviet robot\topenoffice";

//CHECK#1
if (__executed.length !== __expected.length) {
	throw new Test262Error('#1: __executed = /\\brobot\\b/.exec("pilot\\nsoviet robot\\topenoffice"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	throw new Test262Error('#2: __executed = /\\brobot\\b/.exec("pilot\\nsoviet robot\\topenoffice"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	throw new Test262Error('#3: __executed = /\\brobot\\b/.exec("pilot\\nsoviet robot\\topenoffice"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		throw new Test262Error('#4: __executed = /\\brobot\\b/.exec("pilot\\nsoviet robot\\topenoffice"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}
