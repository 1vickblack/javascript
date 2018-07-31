var budget = +prompt('Ваш бюджет?'),
	shopName = prompt('Название вашего магазина'),
	mainList = {
		budget: budget,
		shopName: shopName,
		shopGoods: [],
		employers: {},
		open: false
	};

for (var i = 0; i < 3; i++) {
	mainList.shopGoods[i] = prompt('Какой товар будем продавать?');
}

alert("Ваш бюджет на 1 день = "+budget/30);

console.log(mainList);
