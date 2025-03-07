// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The valueOf function is not generic, it cannot be transferred
    to other kinds of objects for use as a method and there is should be
    a TypeError exception if its this value is not a Boolean object
esid: sec-boolean.prototype.valueof
description: transferring to the Object objects
---*/

assert.throws(TypeError, () => {
  var s1 = new Object();
  s1.valueOf = Boolean.prototype.valueOf;
  s1.valueOf();
  throw new Test262Error();
});

assert.throws(TypeError, () => {
  var s2 = new Object();
  s2.myvalueOf = Boolean.prototype.valueOf;
  s2.myvalueOf();
  throw new Test262Error();
});
