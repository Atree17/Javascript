let score=null;
console.log(typeof score);
let valueinNumber=Number(score)
console.log(typeof valueinNumber);
console.log(valueinNumber);
//strings cannot be converted shows NaN
//""->boolean false;
//"hi"-> boolean true;

let id=Symbol('123');
let i=Symbol('123');
console.log(id==i);
let obj={
    name:"hite",
    age:32,
}
const ia=function(){
    console.log("dfgdf");
}
ia();

