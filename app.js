function filter(array,amountHigh) {
	var houses = [];
	// console.log(array);
	var amountLow = 0;

	if (amountHigh === 50000){
		amountLow = 0;
	}
	else if (amountHigh === 100000) {
		amountLow = 50000;
	}
	else if (amountHigh === 200000) {
		amountLow = 100000;
	}
	else if (amountHigh === 300000) {
		amountLow = 200000;
	}
	else if (amountHigh === 500000) {
		amountLow = 300000;
	}
	else if (amountHigh === 1000000) {
		amountLow = 500000;
	}

	for (var i = 0; i < array.length; i++) {
		var house = parseInt($(array[i]).attr("data-price"));
		if(house >= amountLow && house <= amountHigh){
			// console.log(typeof house);
			// console.log(house)
			houses.push(array[i]);
			// debugger
		}
	}
	console.log(houses)
	return houses;
}



$(document).ready(function() {
	var homeArray =	$('.image-container').find("article");
		// console.log(filter(homeArray, 50000, 100000));


	var checkBoxes = $(".filters").find("input");
	// console.log(checkBoxes);

	$(checkBoxes).on("click", function(){
		if($(this).is(":checked")) {
			var high = parseInt($(this).val());
			var selectedHouses = filter(homeArray,($(high)[0]));
		}
		$(homeArray).hide();
		$(selectedHouses).show();

	});

});
