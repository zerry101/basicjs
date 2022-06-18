function inctax(n:number,taxyear=2022):number{
   if(taxyear<2022)
    return n*1.2;
   return n*1.3;

   
}//function return type is void 

console.log(inctax(19999999999965));

