import { Inv } from "./classes/Invoice.js";
import { Payment } from "./classes/payments.js";
import { ListTemplate } from "./classes/ListTemplate.js";
let docs = [];
const form = document.querySelector(".new-item-form");
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Inv(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'start');
});
//generics
//<T> 
//<T extends object>
//<T extends {name:string} most specific
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docThree = addUID({ name: 'yoshi', age: 40 });
console.log(docThree);
console.log(docThree.name);
//data can be of whatever type we define while declaring this resource
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECOR"] = 3] = "DIRECOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFour = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: "It is a string"
};
console.log(docFour);
const docFive = {
    uid: 1,
    resourceName: ResourceType.DIRECOR,
    data: ["It is a string array", "Power of generics"]
};
console.log(docFive);
//tuples
// similar to array, but type of array at a position is fixedm o
let tup;
let arr2;
tup = ['ryu', 1, false];
arr2 = [1, 2, 3, 4, "hello"];
console.log(tup);
console.log(arr2);
