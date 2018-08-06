let budget,
	shoName,
	time,
	price;

function start(){
	budget = prompt('Ваш бюджет?');
	while(isNaN(budget) || budget == '' || budget == null){
		budget = prompt('Ваш бюджет?', 500000);		
	}
	shopName = prompt('Название вашего магазина', 'Master Shop').toUpperCase();
	time = 16;
	price = 1050;
}

start();

let mainList = {
		budget: budget,
		shopName: shopName,
		shopGoods: [],
		employers: {},
		open: false,
		discount: true
	};


function chooseGoods(){
	for (var i = 0; i < 2; i++) {
		let a = prompt('Какой товар будем продавать?', 'Товар '+(i+1));
		if (a != '' && a != null && (typeof(a)) === 'string' && a.length < 50) {
			// console.log('верно');
			mainList.shopGoods[i] = a;
		}else{
			i -= 1;
		}
	}
}

function workTime(time){
	if (time < 0) {
		document.write('Такого не может быть<br>');
	}else if(time > 8 && time < 20){
		document.write('Время работать!<br>');
	}else if(time > 24){
		document.write('Уже слишком поздно!<br>');
	}else{
		document.write('В сутках только 24 часа<br>');
	}
}

function calcBudget(){
	alert("Ваш бюджет на 1 день = " + Math.round(budget/30));
}

function calcDiscount(price){
	return (mainList.discount == true) ? price = price*80/100 : price;
}

function addEmployers(){
	for (var i = 0; i < 4; i++) {
		mainList.employers[i] = prompt('Имя нового сотрудника');
	}
}

chooseGoods();
workTime(10);
calcBudget();
document.write('Дисконтная цена = '+calcDiscount(price)+'<br>');
addEmployers();





console.log(mainList);
