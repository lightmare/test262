// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The splice property of Array can't be used as constructor
esid: sec-array.prototype.splice
description: >
    If property does not implement the internal [[Construct]] method,
    throw a TypeError exception
---*/

assert.throws(TypeError, () => {
  new Array.prototype.splice();
  throw new Test262Error();
});
