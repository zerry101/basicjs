
type emp_type={readonly id:number,name?:string}

let emp:{readonly id:number,name?:string}={
    id:10,
    //here name is optional
    name:'zi'
};

// emp.age=56;
// cannot assign key value pairs of which keys are not defined
// emp.id=789;
// cannot assign id value if readonly variable is declared

let emp1:emp_type={
    id:89
};


// already defined key  types in emp_type no need to define again
