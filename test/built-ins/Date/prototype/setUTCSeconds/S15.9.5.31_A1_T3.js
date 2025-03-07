// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setUTCSeconds" has { DontEnum } attributes
esid: sec-date.prototype.setutcseconds
description: Checking DontEnum attribute
---*/

if (Date.prototype.propertyIsEnumerable('setUTCSeconds')) {
  throw new Test262Error('#1: The Date.prototype.setUTCSeconds property has the attribute DontEnum');
}

for (var x in Date.prototype) {
  if (x === "setUTCSeconds") {
    throw new Test262Error('#2: The Date.prototype.setUTCSeconds has the attribute DontEnum');
  }
}
