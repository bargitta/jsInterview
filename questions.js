//#1. single thread of javascript
// what is the output?
for(var i = 0; i < 3; i++){
	setTimeout(function(){
		console.log(i);
	},0);
}

//single thread and error handling
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
