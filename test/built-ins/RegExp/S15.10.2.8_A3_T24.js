// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Parentheses of the form ( Disjunction ) serve both to group the components of the Disjunction pattern together and to save the result of the match.
    The result can be used either in a backreference (\ followed by a nonzero decimal number),
    referenced in a replace string,
    or returned as part of an array from the regular expression matching function
es5id: 15.10.2.8_A3_T24
description: >
    Execute /(A)?(A.*)/.exec("zxcasd;fl\\\  ^AAaaAAaaaf;lrlrzs") and
    check results
---*/

var __string = "zxcasd;fl\\\  ^AAaaAAaaaf;lrlrzs";

var __executed = /(A)?(A.*)/.exec(__string);

var __expected = ["AAaaAAaaaf;lrlrzs","A","AaaAAaaaf;lrlrzs"];
__expected.index = 13;
__expected.input = __string;

//CHECK#1
if (__executed.length !== __expected.length) {
	throw new Test262Error('#1: __string = "zxcasd;fl\\\  ^AAaaAAaaaf;lrlrzs"; __executed = /(A)?(A.*)/.exec(__string); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	throw new Test262Error('#2: __string = "zxcasd;fl\\\  ^AAaaAAaaaf;lrlrzs"; __executed = /(A)?(A.*)/.exec(__string); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	throw new Test262Error('#3: __string = "zxcasd;fl\\\  ^AAaaAAaaaf;lrlrzs"; __executed = /(A)?(A.*)/.exec(__string); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		throw new Test262Error('#4: __string = "zxcasd;fl\\\  ^AAaaAAaaaf;lrlrzs"; __executed = /(A)?(A.*)/.exec(__string); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}
