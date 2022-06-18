"use strict";
var a1;
(function (a1) {
    a1[a1["Small"] = 1] = "Small";
    a1[a1["Medium"] = 2] = "Medium";
    a1[a1["Large"] = 3] = "Large";
})(a1 || (a1 = {}));
;
let n = a1.Large;
console.log(n);
