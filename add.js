const OS=require('node:os');
console.log(OS.cpus().length);

const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
module.exports= {
    add,
    sub
}

