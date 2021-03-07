import {Map} from 'immutable';

const person = { name:"john" };

const update=Object.assign({},person,{name:'bob',age:30});//copy of person abject to empty object
console.log(update);

const updated ={...person, name:'bob'};//copy of the person object to update object using spred operater

const number=[1,2,3];
//adding
const index=numbers.indexOf(2);
const added=[...number, 4];

let book =Map({title:"hiiii"});

function publish(book){
    book.isPublisged=true;
}
publish(book);
console.log(book);