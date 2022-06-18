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
console.log(x?.birthday);
