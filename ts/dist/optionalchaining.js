"use strict";
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
console.log(x === null || x === void 0 ? void 0 : x.birthday);
