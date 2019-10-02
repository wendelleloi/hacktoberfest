// LANGUAGE: Javascript
// ENV: Node.js
// AUTHOR: Wendell Eloi
// GITHUB: https://github.com/wendelleloi

var Person = function(name,location){
  this.name = (name) ? name : "Anyonymous";
  this.place = (location) ? location : "BRAZIL";
}

Person.prototype.greeting = function(name){
  name = (name) ? name : this.name;
  let HelloWorld = `Hello World ${name}! you're hacking!`
  console.log(HelloWorld);
  return HelloWorld;
}

// Javascript ES6
class Person {
  constructor (name='Anyonymous', location='Brazil') {
    this.name = name;
    this.place = location;
  }
  greeting (name=this.name) {
    let HelloWorld = `Hello World ${name}! you're hacking!`
    console.log(HelloWorld);
    return HelloWorld;
  }
}

var myself = new Person('Wendell Eloi','Rio Grande do Norte, Brazil');
myself.greeting();