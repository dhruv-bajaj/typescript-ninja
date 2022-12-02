import { Inv } from "./classes/Invoice.js";
import { Payment } from "./classes/payments.js";
let docOne;
let docTwo;
docOne = new Inv('yoshi', 'web work', 2000);
docTwo = new Payment('mario', 'web work', 4000);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const form = document.querySelector(".new-item-form");
console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    console.log(type.value);
    if (type.value === "invoice") {
        doc = new Inv(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
