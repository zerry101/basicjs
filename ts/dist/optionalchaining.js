"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let x = getCustomer(52);
// if(x.birthday==null || x.birthday==undefined)
// {
//     console.log('null');
// }
// else
// {
// console.log('perfect');
// }
console.log((_a = x === null || x === void 0 ? void 0 : x.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
// checks if log if functions or variable and treat is as it is
