	let array = [1, 0, 3, -3, 7, 18, 10.5, 9];
	let results = array.filter(function (item, index, array) {
		if ((item % 3) === 0) {
			return item;
		}
	});
	alert('Элементы массива, кратные 3: ' + results);