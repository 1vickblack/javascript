let str = 'урок-3-был слишком легким';
str = str[0].toUpperCase() + str.slice(1);
console.log(str);
while (~str.indexOf(' ') != 0) {
	str = str.slice(0, str.indexOf(' ')) + '-' + str.slice(str.indexOf(' ')+1);
}


let word = str.slice(str.indexOf('легким'));
word = word.slice(0, word.length - 2) + 'o'; 
console.log(word);


let arr = [20, 33, 1, 'Human', 2, 3],
sum = 0;
for (var i = 0; i < arr.length; i++) {
	if ((typeof(arr[i])) != 'number') {
		arr[i] = 0;
	}
	sum += Math.pow(arr[i], 3);
}
console.log(Math.sqrt(sum));