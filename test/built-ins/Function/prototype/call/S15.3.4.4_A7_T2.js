// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Function.prototype.call can't be used as [[Construct]] caller
es5id: 15.3.4.4_A7_T2
description: Checking if creating "new Function.prototype.call()" fails
---*/

try {
  var FACTORY = Function.prototype.call;
  var obj = new FACTORY();
  throw new Test262Error('#1: Function.prototype.call can\'t be used as [[Construct]] caller');
} catch (e) {
  if (!(e instanceof TypeError)) {
    throw new Test262Error('#1.1: Function.prototype.call can\'t be used as [[Construct]] caller');
  }
}
