import {compose,pipe} from "lodash/fp";
import {Map} from 'immutable';
import { produce} from 'immer';
// console.log("Hello World!");

// function sayHello(){//funcation are first class citizen
//     return function(){
//         return "hello world";
//     }
// }

// function greet(fn){
//     console.log(fn())
// }



// greet(sayHello);
// let fn=sayHello();
// let message=fn();

// let numbers=[1,2,3];
// numbers.map(res=>number*2);

// setTimeout(()=>console.log("hello"),2000);

// let input ="  JavaScript   ";
// // let outpur="<div>"+input.trim()+"</div>"
// const trim=str=>str.trim();
// // const wrapInDiv =str=>"<div>"+str+"<div>";
// const wrapInDiv =str => `<div>${str}</div>`;
// const toLowerCase =str=>str.toLowerCase();

// const result=wrapInDic(trim(input));//composition
// console.log("result"+result);

//composing and piping
//lodash.com
//it take bunch of arrugments and returns a new fucntions that is the 
// composition of all the function
// const transform=compose(wrapInDiv,toLowerCase,trim);//once again we have confusio about meothds which one run
// transform(input);

// const transform=pipe(wrapInDiv,toLowerCase,trim);//clean code 
// transform(input);

//currying
//powerful funcation programming technic
let input ="  JavaScript   ";

const trim=str=>str.trim();
const wrapInDiv =str => `<div>${str}</div>`;//problem here same code but diffrent type like sapn and div
const wrapInSpan =str => `<span>${str}</span>`;//but diffrent type like sapn and div so

// const wrap = (type,str)=>`<&{type}>${str}</&{type}>`;
const wrap = type=>str=>`<${type}>${str}</${type}>`;
const toLowerCase =str=>str.toLowerCase();

const transform=pipe(trim,toLowerCase,wrap("div"));//clean code 
// console.log(transform(input));

const person = { name:"john" };

const update=Object.assign({},person,{name:'bob',age:30});//copy of person abject to empty object
// console.log(update);

const updated ={...person, name:'bob'};//copy of the person object to update object using spred operater
// console.log(updated)

const person1 ={
    name:"john",
    address:{
        country:"india",
        city:"bengaluru"
    }
}
//immitablity
const original={
    ...person1 , 
    address:{
...person1.address,
city:"new work"
    },
    name:'bob'};//it make one copy of person object

original.address.city="new work";
// console.log(original);



const number=[1,2,3];
//adding
const index=number.indexOf(2);

const added=[...number.slice(0,index),//return new array from 0 to 2
4,
...number.slice(index,)
];

// console.log(added);

// removing
const removed=number.filter(n=>n!==2);
// console.log(removed)

//updateing

const upda=number.map(n  => n===2 ? 20 : n)
// console.log(upda);

//libraries for immutable the object
//immutable, immer ,mori
//immutable.js

let book =Map({title:"book of library"});
// console.log(book.get("title"));
// console.log(book.toJS());
//Emmer libraray
function publish(book){
//   return  book.set("isPublished",true);
return produce(book,draftBook=>{  // immer library
    draftBook.isPublished=true;
})
}

book=publish(book);
console.log(book.toJS());




