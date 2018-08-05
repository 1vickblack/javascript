let week = [
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
		'sunday'
	],
	today = 'sunday',
	holidays = [
		'saturday',
		'sunday',
		'monday'
	];

var string = '',
t,h = false;


for (var i = 0; i < week.length; i++) {

	for (var j = 0; j < holidays.length; j++) {
		if (holidays[j] == week[i]) {
			string += '<b>';
			h = true	
		}			
	}

	if (today == week[i]) {
		string += '<i>';
		t = true	
	}

	string += week[i];

	if (t) {
		string += '</i>';	
	}
	if (h) {
		string += '</b>';
	}

	document.write(string += '<br>');
	string = '';
	h,t = false;
}

let arr = ['355', '452', '748', '645', '35461', '77564', '865233', '77684'];

for(var i = 0; i < arr.length; i++){
	(arr[i][0] == '3' || arr[i][0] == '7') ? console.log(arr[i]) : '';
}