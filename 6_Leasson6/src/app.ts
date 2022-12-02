import { Inv } from "./classes/Invoice.js";
import { Payment } from "./classes/payments.js";
import { HasFormatter } from "./interfaces/HasFormatter";
import {ListTemplate} from "./classes/ListTemplate.js";
let docs: HasFormatter[] = [];

const form = document.querySelector(".new-item-form") as HTMLFormElement;


const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul') as HTMLUListElement;

const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
   
    if (type.value === "invoice") {
        doc = new Inv(toFrom.value, details.value,
            amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value,
            amount.valueAsNumber);
    }
    list.render(doc,type.value,'start')
})


//generics
//<T> 
//<T extends object>
//<T extends {name:string} most specific
const addUID = <T extends {name:string}>(obj:T)=>{
    let uid = Math.floor(Math.random()*100);
    return {...obj,uid};
}

let docThree = addUID({name:'yoshi',age:40});

console.log(docThree);
console.log(docThree.name);

//data can be of whatever type we define while declaring this resource

enum ResourceType{
    BOOK, AUTHOR,FILM,DIRECOR,PERSON
}
interface Resource<T>{
    uid: number;
    resourceName: ResourceType;
    data: T;
}

const docFour: Resource<string>={
    uid:1,
    resourceName:ResourceType.AUTHOR,
    data:"It is a string"
}
console.log(docFour);
const docFive: Resource<string[]>={
    uid:1,
    resourceName:ResourceType.DIRECOR,
    data:["It is a string array","Power of generics"]
}
console.log(docFive);

//tuples
// similar to array, but type of array at a position is fixedm o
let tup:[string,number,boolean];
let arr2:(string|number|boolean)[];
tup=['ryu',1,false];
arr2 = [1,2,3,4,"hello"];
console.log(tup);
console.log(arr2);
