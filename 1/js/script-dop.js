var num = 337215,
	pro = 1;

while(num){
	pro *= num%10;
	num = parseInt(num/10);
}

console.log(Math.pow(pro, 3));