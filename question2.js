
	function Article(content, name){
		this.content = content;
		this.name = name;
		this.test = function(){
			console.log(this.content + this.name);
		}
	}
	
Article.prototype = {
	read: function(){
		console.log("reading " + this.name);
	},
	write: function() {
		console.log("writing " + this.name);
	}
};

var a1 = new Article('content1','a1');
var a2 = Object.create(Article);
console.log(a2.name);
a1.test();
console.log(a1.name);
a1.read();
a1.write();

