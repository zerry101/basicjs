"use strict";
function kgToLbs(wt) {
    if (typeof wt == 'number') {
        return wt * 2.2;
    }
    else {
        return parseInt(wt) * 2.2;
    }
}
console.log(kgToLbs(40));
function lbsToKg(lb) {
    if (typeof lb == 'number') {
        return lb / 2.2;
    }
    else {
        return parseInt(lb) / 2.2;
    }
}
console.log(lbsToKg(40));
