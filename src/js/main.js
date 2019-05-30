var i = 5;

var func = function(){
	let i = 10;
	console.log(i);
	var anotherFunc = function(){
		i = 15;
		console.log(i);
	};
	anotherFunc();
	console.log(i);
};


console.log(i);
func();