type Customer ={
    birthday:Date;
}


function getCustomer(id:number):Customer | null | undefined{
        return    id === 0 ? null : {birthday:new Date()};
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
console.log(x?.birthday?.getFullYear());


let log:any = null;

log?.('a');
// checks if log if functions or variable and treat is as it is

