// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The join property of Array can't be used as constructor
esid: sec-array.prototype.join
description: >
    If property does not implement the internal [[Construct]] method,
    throw a TypeError exception
---*/

assert.throws(TypeError, () => {
  new Array.prototype.join();
  throw new Test262Error();
});
