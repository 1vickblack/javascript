var budget = +prompt('Ваш бюджет?'),
	shopName = prompt('Название вашего магазина'),
	mainList = {
		budget: budget,
		shopName: shopName,
		shopGoods: [],
		employers: {},
		open: false
	},
	time = 16;

for (var i = 0; i < 5; i++) {
	let a = prompt('Какой товар будем продавать?');
	if (a != '' && a != null && (typeof(a)) === 'string' && a.length < 50) {
		console.log('верно');
		mainList.shopGoods[i] = a;
	}else{
		i -= 1;
	}
}

if (time < 0) {
	console.log('Такого не может быть');
}else if(time > 8 && time < 20){
	console.log('Время работать!');
}else if(time > 24){
	console.log('Уже слишком поздно!');
}else{
	console.log('В сутках только 24 часа');
}

alert("Ваш бюджет на 1 день = "+budget/30);

console.log(mainList);
