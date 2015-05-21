//#1. single thread of javascript
// what is the output?
//how to change the behavior to the expected?
for(var i = 0; i < 3; i++){
	setTimeout(function(){
		console.log(i);
	},0);
}

//single thread and error handling
//what is the output?
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

//#2. function invocation
//Please make the assert pass
function add(a,b){
		return a + b;
}
function Calculator(input){
	this.input = input;
	
	return{
		double: function(){
			return add (this.input, this.input);
		}
	};
}
console.assert(new Calculator(2).double()===4);

//Answer: add is called as a function, so "this" is pointing to global object, and it does not have "input"
//this easiest way is remove this, because innerfunction can access the scope of its parent, so it can access the arguments.
function Calculator(input){
	return{
		double: function(){
			return add (input, input);
		}
	};
}
