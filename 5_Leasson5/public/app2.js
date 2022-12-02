"use strict";
//interacting with dom
const anchor = document.querySelector('a');
console.log(anchor);
// On hovering we get ancgor is null because ts doesn't know whether index.html has <a> tag or not.
// So it throws a warning
// console.log(anchor.href)
//So better check
if (anchor) {
    console.log(anchor.href);
}
// or if we are certain we can use !
const anc = document.querySelector('a');
console.log(anc.href);
// typecast as it doesn't now form is a form as class can be applied on any element
const form = document.querySelector(".new-item-form");
console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
//classes in typescript
// By default access modifier is public
//We can use private,public or readonly explicity
// readonly : can be accessed outside the class but not change the value
class Invoice {
    constructor(c, d, e) {
        this.client = c;
        this.details = d;
        this.amount = e;
    }
    format() {
        return `${this.client} owes Rs ${this.amount} for ${this.details}`;
    }
}
//instantiating an object
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the mario website', 300);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(new Invoice('mario2', 'work on the mario website', 550));
console.log(invoices);
console.log(invOne.format());
//or
class InvoiceTwo {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    ;
    format() {
        return `${this.client} owes Rs ${this.amount} for ${this.details}`;
    }
}
const invThree = new Invoice('db', 'work on the mario website', 400);
console.log(invThree);
