// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype has the property "toLocaleTimeString"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "toLocaleTimeString"
---*/

if (Date.prototype.hasOwnProperty("toLocaleTimeString") !== true) {
  throw new Test262Error('#1: The Date.prototype has the property "toLocaleTimeString"');
}
