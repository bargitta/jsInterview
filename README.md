# jsInterview
JavaScript is a flexible language, and also the predominant language in the Web world. 
This repository contains questions I have used in past javascript interviews. Hopefully it can help you
a little bit when preparing your job interview or developing javascript projects.

# Section 1: Grammar
This section includes basic concepts in JavaScript: data type, function, closure, etc.

1. What data types does JavaScript provide?
A: Six primitive types: string, number, boolean, null, undefined, Symbol (new in ECMAScrpt 6) and Objects. 
   
   Number: the double precision 64-bit binary format; 3 symbolic values: +Infinity, -Infinity and NaN

   String: immutable. a set of 16-bit unsigned integer values.

   Symbol: unique and immutable primitive value

   Object: a keyed collection of properties

   use typeof to know the data type

   p.s. You may argue that typeof(null) returns 'object', this is a bug to be fixed.

 2. What values are falsy?
 A: false, 0, null, undefined, '', NaN; Others are true including 'false'

 3. How to create an object?
 A: use literal

 ```javascript
	 var person = {
         id: 123,
         sex: 'male',
         'first-name': 'Ed',
         'last-name': 'Green'
	 };
```
  4. What is closure?
  A: A closure is a function having access to its parent scope, even after the parent function has closed. 

  5. What is JSON? What is the difference between a JavaScript object and a JSON data?
  A: JSON is JavaScript Object Notation, a data interchange format. JSON is a syntax. JSON data is text only, though it uses JavaScript data format.
  
  6. What is prototype? How to inherit from an object in JavaScript?

  7. How to define a function?
  A: 
```javascript
  var func = function(){}; function func(){}
``` 
  8. How to call a function?
  A: There are four ways to call a function and what "this" points to depends on how the function is invoked. 
```javascript
     var repository = {
        name: "JS interview",
        getLogo: function(){
          return this.name + "-repository";
        }
     };
```
  1) Call function getLogo directly;
```javascript
      var func = repository.getLogo
      func();
      //"this" is pointing to globle object (Window in browser)
```
  2) Call as a method of an object; 
```javascript
      repository.getLogo();
      //"this" is pointing to repository
```
  3) Use call or apply; Use contructor to call a function;
```javascript 
      repository.getLogo.call({name:"test"});
      repository.getLogo.apply({name:"test"});
      //"this" is pointing to {name:"test"}
```
  4) Use as constructor
```javascript
     var Repository = function(name){
        this.name = name;
     };
     Repository.prototype.getLogo = function(){
        return this.name + "-repository";
     };

     var jsRepo = new Repository("JS interview");
     jsRepo.getLogo();
```
  9. What is same-origin policy?
