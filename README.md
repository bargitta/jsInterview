# jsInterview
JavaScript is a flexible language, and also the predominant language in the Web world. 
This repository contains questions I have used in past javascript interviews. Hopefully it can help you
a little bit when preparing your job interview or developing javascript projects.

### Section 1: Grammar
This section includes basic concepts in JavaScript: data type, function, closure, etc.

**What data types does JavaScript provide?**

Six primitive types: String, Number, Boolean, Null, Undefined, Symbol (new in ECMAScrpt 6) and Objects. 
Number: the double precision 64-bit binary format; 3 symbolic values: +Infinity, -Infinity and NaN

String: immutable. a set of 16-bit unsigned integer values.

Symbol: unique and immutable primitive value

Object: a keyed collection of properties

use typeof to know the data type
p.s. You may argue that typeof(null) returns 'object', and this is a bug to be fixed.

**What values are falsy?**

false, 0, null, undefined, '', NaN; Others are true including 'false'

**How to create an object?**

use literal

 ```javascript
	 var person = {
         id: 123,
         sex: 'male',
         'first-name': 'Ed',
         'last-name': 'Green'
	 };
```
**What is closure?**

A closure is a function having access to its parent scope, even after the parent function has closed. 

**What is JSON? What is the difference between a JavaScript object and a JSON data?**

JSON is JavaScript Object Notation, a data interchange format. JSON is a syntax. JSON data is text only, though it uses JavaScript data format.
  
**How to inherit from an object in JavaScript?**

```javascript
var base = {
	name: "base",
	getReason: function(){
		return "reason"
	}
}
var error = Object.create(base);
//error inherits base, and the prototype of error is base
//the prototype chain is like error-->base-->null

//another example here
var numbers = ['1', '2', '3'];
//the prototype chain: numbers-->Array.prototype-->Object.prototype-->null
```

**How to define a function?**

```javascript
  var func = function(){}; function func(){}
``` 
**How to call a function?**

There are four ways to call a function and what "this" points to depends on how the function is invoked. 

```javascript
     var repository = {
        name: "JS interview",
        getLogo: function(){
          return this.name + "-repository";
        }
     };
```

*Call function getLogo directly;

```javascript
      var func = repository.getLogo
      func();
      //"this" is pointing to globle object (window in browser)
```
*Call as a method of an object; 

```javascript
      repository.getLogo();
      //"this" is pointing to repository
```
*Use call or apply

```javascript 
      repository.getLogo.call({name:"test"});
      repository.getLogo.apply({name:"test"});
      //"this" is pointing to {name:"test"}
```
*Use as constructor, the function is called with new keyword

```javascript
     var Repository = function(name){
        this.name = name;
     };
     Repository.prototype.getLogo = function(){
        return this.name + "-repository";
     };

     var jsRepo = new Repository("JS interview");
     jsRepo.getLogo();
     //jsRepo inherits Repository
```
**What is same-origin policy?**

Web browser constrains interactions between two origins, e.g., XHR by default is not allowed between two origins. Two resources have the same origin if they have same protocol, host, port. e.g. 'http://www.abc.com' and 'http://mail.abc.com' are different origins. 

**How to make cross origin XHR?**

Various methods like JSONP and [CORS](http://www.w3.org/TR/cors/). CORS: set web server to allow trusted origins. In request header, you will have Origin, and in response header you will see Access-Control-Allow-Origin

### Section 2: Programming tests

**What is the output of the following program?**
```javascript
function Article(content, name){
		this.content = content;
		this.name = name;
		this.test = function(){
			console.log(content + name);
		}
	}
	var a1 = new Article('content1','name1');
	var a2 = new Article('content2','name2');
	
	a1.test.call(a2);	
  ```
  
**What is the output of the following program?**
```javascript
var a = [3,2,4];
var u = 0;
for (var i in a){
  u += i;
}
console.log(u);
```

**Single thread**
```javascript
// what is the output?
//how to change the behavior to the expected?
for(var i = 0; i < 3; i++){
	setTimeout(function(){
		console.log(i);
	},0);
}
```
**Exception handling**
```javascript
(function(){
	try{
		var person = {};
		setTimeout(function(){
			console.log(person.name);
			console.log(person.getName());
		},0);
	}catch(exception){
		console.log("caught an exception");
	}

})();
```
