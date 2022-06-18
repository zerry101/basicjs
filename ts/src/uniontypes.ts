function kgToLbs(wt: number|string):number{
    if(typeof wt=='number')
    {
        return wt*2.2;
    }
    else{
        return parseInt(wt)*2.2;
    }
}

console.log(kgToLbs('40ffdf'));


function lbsToKg(lb: number|string):number{
    if(typeof lb=='number')
    {
        return lb/2.2;
    }
    else{
        return parseInt(lb)/2.2;
    }
}

console.log(lbsToKg('40kg'));
