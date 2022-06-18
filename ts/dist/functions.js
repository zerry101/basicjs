"use strict";
function inctax(n, taxyear = 2022) {
    if (taxyear < 2022)
        return n * 1.2;
    return n * 1.3;
} //function return type is void 
console.log(inctax(100809));
