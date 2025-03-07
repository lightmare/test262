// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.toLocaleTimeString property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.tolocaletimestring
description: Checking DontEnum attribute
---*/

if (Date.prototype.toLocaleTimeString.propertyIsEnumerable('length')) {
  throw new Test262Error('#1: The Date.prototype.toLocaleTimeString.length property has the attribute DontEnum');
}

for (var x in Date.prototype.toLocaleTimeString) {
  if (x === "length") {
    throw new Test262Error('#2: The Date.prototype.toLocaleTimeString.length has the attribute DontEnum');
  }
}
