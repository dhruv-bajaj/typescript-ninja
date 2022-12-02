let greet:Function=()=>{
    console.log("Hello World");
}
greet();

greet = ()=>{
    console.log("This is allowed as it is a function only");
}
greet();

// ? for optional paramer
// = for default
// default and optional not used together
const add = (a:number,b:number=5,c?:number|string)=>{
    console.log(a+b);
    console.log(c);
    return a+b;
}
add(5);
add(5,10,"hello");
// required parameters followed by default 

const minus = (a:number,b:number)=>{
    return a-b;
}
let result = minus(10,2);
// result type will be inferred from return statement so a number

console.log(result);

// explicitly declaring return type
const mulytiply = (a:number,b:number):number=>{
    return a*b;
}
console.log(mulytiply(10,12));

// return type is void if we are not returning anything
// In ts void and undefined are different

//type alias

type StringOrNum = string | number;

const greetAgain=(uid:StringOrNum)=>{
    console.log(uid);
}
greetAgain("h123");
greetAgain(123);


let gree:(a:string, b:string)=>void
gree = (name:string,age:string)=>{
    console.log(name,age);
}
gree("db","23");

let calc :(num1:number,num2:number,action:string)=>number|string

calc =(num1:number,num2:number,action:string)=>{
    if(action==="add"){
        return add(num1,num2 );
    }else{
        return "operation not valid";
    }
}
console.log(calc(12,23,"add"));
