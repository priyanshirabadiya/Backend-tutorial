// tsc filename.ts => Typescript Compailer from creating js file it will create javascript file for compailation of typescript 
// node filename.js => It will used for run a program. It will run whole program.


// let a : number = 45;
// a = 56;
// console.log(a);


// let b : string = "Hello world";
// console.log(b);


// let c : boolean = true;
// console.log(c);


// let big : number = 457896541;
// console.log(typeof(big));
// console.log(big);


// This will not throw an error in javascript and give type of byself is number
// let byself =  "hello" ;
// byself = 45;
// console.log(typeof(byself));

// ****------------------------------------------ Array

// const names: string[] = [];
// names.push("Dylan"); 
// names.push("Raha")
// console.log(names);


// const names: readonly string[] = ["Dylan" , "afsodifio"];
// console.log(names);


// const numbers = [1, 2, 3]; // inferred to type number[]
// numbers.push(4);

// console.log(typeof numbers);  //object



// -------------------------------------------Functions

// Simple function
// function add(a:number , b:number){
//     return a + b ;
// }
// console.log(add(1 , 5));

// fat arrow function
// let mul = (a:number , b:number) => { return a * b }
// console.log(mul(5,5));

// function with return type : The meaning of last string is that return type of function must be string or else it will cause an error
// function sum(a:number , c:number , b:string):string{
//     return a + c + b ;
// }
// console.log(sum(3,3,"5"));

// function with return type Date
// function getTime(): Date {
//     const now = new Date();
//     return new Date(now.getFullYear())
// }
// console.log(getTime());

// function getT():number{
//     return new Date().getFullYear()
// }
// console.log(getT());


// function with return type void : You can't return any value in this function so type of this function is void means empty or nan to return

// function printhello():void {
//     console.log("Hello world");
// }

// printhello()


// function with return type Boolaen

// function bool(a :boolean , b :boolean):boolean {
//     return a && b 
// }
// console.log(bool(true , false));

// Optional Parameters
// the `?` operator here marks parameter `c` as optional
// function addi(a: number, b: number, c?: number) {
//     return a + b + (c || 0);
// }
// console.log(addi(2,5,5));



// Defult parameter / value with parameter 

// function num(a: number = 5, b: number = 2 ): void {
//     console.log(a**b);
// }
// num(); 


// default parameter is only used when we don't value as parameter  
// function pow(value: number, exponent: number = 2) {
//     return value ** exponent;
// }
// console.log(pow(2,5)); //32



// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
// function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
//     return dividend / divisor;
// }

// console.log(divide({ dividend: 10, divisor: 2 }));

// function summ({firstval , secondval} : {firstval : number , secondval : number}){
//     return firstval + secondval ;
// }
// console.log(summ({firstval : 20 , secondval : 1 }));





// Rest Parameters
// function add(a: number, b: number, ...rest: number[]) {
//     return a + b + rest.reduce((p, c) => p + c);
// }

// console.log(add(10,10,10,10,10));


// function addition(a : number , b : number , ...c:number[]){
//     return a + b + c.reduce((g,t) => g + t);
// }
// console.log(addition(10,10,10,10,10));


// -----------------------------NO IDEA-----------------------------------

// type Negate = (value: number) => number;

// // in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
// const negateFunction: Negate = (value) => value * 10;

// console.log(negateFunction(10));

// -------------------------------Type Annotation----------------------------------------

// let newnum:number = 10;
// console.log(typeof(newnum.toString()));
// console.log(typeof newnum);


// let sqrt:number = Math.sqrt(25);
// console.log(sqrt);
 

// let nanvalue : number = NaN;
// console.log(typeof nanvalue);


// let fname:string = "priyanshi";
// let lname:string = " rabadiya";
// let sum:string = fname + lname ;
// console.log(sum);


// let sentence:string = "Hello this is priyanshi rabadiya" 
// let sentencelength:number = sentence.length
// console.log(sentencelength);

// let text:string = "This is sentence for uppercase and lowercase"
// let uupercase:string = text.toUpperCase();
// let lowercase:string = text.toLowerCase();
// console.log(uupercase);
// console.log(lowercase);


// let str:string = "This is string to make string as substring";
// let substr:string = str.substring(0,10);
// console.log(substr);


// const str1:string = "this is string 1";
// const str2:string = "this is string 2";
// const strcm:boolean = (str1 === str2)
// console.log(strcm);


// const product:string = "jewellry";
// const price:number = 45 ;
// const templeteliterals = `this is templete literals where product is ${product} and price is ${price}$ `
// console.log(templeteliterals);


