import { Inv } from "./classes/Invoice.js";
import { Payment } from "./classes/payments.js";
import { HasFormatter } from "./interfaces/HasFormatter";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Inv('yoshi','web work',2000);
docTwo = new Payment('mario','web work',4000);

let docs: HasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom  = document.querySelector('#tofrom') as HTMLInputElement;
const details  = document.querySelector('#details') as HTMLInputElement;
const amount  = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    let doc: HasFormatter;
    console.log(type.value);
    if(type.value==="invoice"){
        doc = new Inv( toFrom.value,details.value,
            amount.valueAsNumber);
    }else{
        doc = new Payment(toFrom.value,details.value,
            amount.valueAsNumber);
    }
    console.log(doc);
})

