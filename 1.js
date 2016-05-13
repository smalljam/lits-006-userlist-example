var fs = require('fs');
fs.readFile('1.txt','utf-8',function(err, result){
	var textNumbers = result.split('\n');
	var sum = 0;
	textNumbers.forEach(function(str){
		sum += str*1;
	});
	console.log('1', sum);
});



var fileContent = fs.readFileSync('1.txt','utf-8');
var textNumbers = fileContent.split('\n');
var sum = 0;
textNumbers.forEach(function(str){
	sum += str*1;
});
console.log('2', sum);
