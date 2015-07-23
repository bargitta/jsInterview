

//#2. function invocation
//Please make the assert pass
function add(a,b){
		return a + b;
}
function Calculator(input){
	this.input = input;
	this.add (this.input, this.input);
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
