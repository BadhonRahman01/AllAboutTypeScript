let age: number = 20;

// if (age >= 20) {
//   console.log('성인입니다.');
// } else {
//     console.log('청소년입니다.');
//     }
if (age < 20) 
    age += 10;
console.log('Hello World!');

let sales = 123_456_789;
let course = 'Typescript';
let is_published = true;
let level;

function render(document: any){
    console.log(document);
}


//arrays

let numbers: number[] = [];
numbers.forEach(n => n.toString());


// tupes
let user: [number, string, boolean] = [1, 'Steve', true];
user[1].codePointAt(0);
user.push(123);

//enums
const small = 1
const medium = 2
const large = 3;

const enum Size { Small = 1, Medium, Large };

let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
    // let x;
    if (taxYear < 2022) 
        return income * 1.2;
    return income * 1.4;
}

calculateTax(1000);

// Objects
type Employee = {
    readonly id: number;
    name: string,
    retire: (date: Date) => void;
}
let employee: Employee = { 
    id: 1,
     name: "Rahman",
     retire: (date: Date) =>{
        console.log(date);
     }
    };

employee.name = "Badhon";

function kgToLbs(weight: number | string): number {
    // if (typeof weight === 'string')
    //     weight = parseFloat(weight);
    // return weight / 2.2;
//narrowing
 if (typeof weight === 'number')
    return weight * 2.2;
 else
    return parseFloat(weight) * 2.2;
}

kgToLbs(123);
kgToLbs('123kg');

type intersection
type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { console.log('dragging...'); },
    resize: () => { console.log('resizing...'); }
};

//Literal Types
type Quantity = 50 | 100 | 200;
let quanttity: Quantity = 50;
type Metric = 'kg' | 'lbs' | 'km' | 'miles';

//nullable types
function greet(name:string | null){
    // console.log(`Hello ${name.toUpperCase()}`);
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}

greet(null);


type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
if (customer !== null && customer !== undefined) 
    console.log(customer?.birthday?.getFullYear());
else
    console.log('customer not found');

let log: any = null;
log?.('a');

// Nullish Coalescing Operator
let speed: number | null = null;
let ride = {
    speed: speed ?? 40
}

//type assertion
let phone = <HTMLInputElement>document.getElementById('phone');
phone.value = '123-456-7890';
// unknown type
function render(document: unknown){
    if (document instanceof WordDocument){
        document.toUpperCase();
}
    document.move();
    document.fly();
    document.whateverweant();
}
//the never type
function reject(message: string): never{
    throw new Error(message);
}
function processEvents(){
    while(true){
        console.log('processing');
    }
}

processEvents();
reject('error');
console.log('done');