import { HasFormatter } from "../interfaces/HasFormatter";

export class Inv implements HasFormatter{
    constructor(
        readonly client:string,
        private details:string,
        public amount:number
    ){};
    format(){
        return `${this.client} owes Rs ${this.amount} for ${this.details}`;
    }
}