// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.day
description: Temporal.Calendar.prototype.day throws RangeError on
  ToTemporalDate when temporalDateLike is invalid string.
info: |
  4. If Type(temporalDateLike) is not Object or temporalDateLike
     does not have an [[InitializedTemporalDate]] or
     [[InitializedTemporalYearMonth]] internal slot, then
    a. Set temporalDateLike to ? ToTemporalDate(temporalDateLike).
features: [Temporal, arrow-function]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.throws(RangeError, () => cal.day("invalid string"),
    'cal.day("invalid string") throws a RangeError exception');
