

$(document).ready(function(){
	var houses = $("article");


	$(".filters input").on('click', function(){
		var checked = $(".filters input:checkbox:checked")
		var filterPrice = parseInt($(this).val());

		// make sure something is selected
		if(checked.length > 0){
			houses.hide();
			// add filtering
			for (var i = 0; i < houses.length; i++) {
				var housePrice = parseInt($(houses[i])[0].dataset.price);

				if(housePrice < filterPrice){
					$(houses[i]).show();
					console.log($(this).val()+" > "+$("article")[i].dataset.price);
			};
			}
		}
		else $("article").show();
	});
});












// function filter(array,amountHigh) {
// 	var houses = [];
// 	// console.log(array);
// 	var amountLow = 0;

// 	if (amountHigh === 50000){
// 		amountLow = 0;
// 	}
// 	else if (amountHigh === 100000) {
// 		amountLow = 50000;
// 	}
// 	else if (amountHigh === 200000) {
// 		amountLow = 100000;
// 	}
// 	else if (amountHigh === 300000) {
// 		amountLow = 200000;
// 	}
// 	else if (amountHigh === 500000) {
// 		amountLow = 300000;
// 	}
// 	else if (amountHigh === 1000000) {
// 		amountLow = 500000;
// 	}

// 	for (var i = 0; i < array.length; i++) {
// 		var house = parseInt($(array[i]).attr("data-price"));
// 		if(house >= amountLow && house <= amountHigh){
// 			houses.push(array[i]);
// 		}
// 	}
// 	console.log(houses);
// 	return houses;
// }

// function createHouse(array, data, jpg, priceTag ){

// 	var newHome = ($(array[0]).clone())[0];
// 	$(newHome).attr("data-price", data);
// 	$(newHome).find("img").attr("src", jpg);
// 	$(newHome).find("h4").html(priceTag);
// 	return newHome;
// };


// function highLow (array) {
// 	// for (var i = 0; i < array.length; i++) {
// 	// 	var house = parseInt($(array[i]).attr("data-price"));
// 	// 	prices.array[i] = house;

// 	// }

// 	var sorted = array.sort(function (a, b) {
// 		parseInt($(a).attr("data-price")) - parseInt($(b).attr("data-price"));
// 	});
//   	return sorted;
// }





// $(document).ready(function() {
// 	var homeArray =	$('.image-container').find("article");

// 	console.log(highLow(homeArray));


// 	$(".image-container").append($(createHouse(homeArray, "10000", "img/four.jpg", "$10,000")));
// 	$(".image-container").append($(createHouse(homeArray, "10000", "img/four.jpg", "$10,000")));
// 	$(".image-container").append($(createHouse(homeArray, "10000", "img/four.jpg", "$10,000")));

// 	$(".textures").append("<span class='forest'></span>");

// 	$('.light').on('click',function(e) {
// 		e.preventDefault();
// 		$('body').css('background', 'url("img/tileable_wood_texture.png")', "no-repeat;");
// 	});

// 	$('.dark').on('click',function(e) {
// 		e.preventDefault();
// 		$('body').css('background', 'url("img/dark_wood.png")', "no-repeat");

// 	});

// 	$('.forest').on('click',function(e) {
// 		e.preventDefault();
// 		$('body').css('background', 'url("img/forest.jpg")', "no-repeat");

// 	});


// 	var checkBoxes = $(".filters input:checkbox");
// 	// console.log(checkBoxes);
// // Still need to keep mulitple value ranges on page (multiple clicks), also if 2 boxes are checked then append images to DOM rather than clear.
// 	$(checkBoxes).on("click", function(){
// 		var highCheck = 0;
// 		for (var i = 0; i < checkBoxes.length; i++) {
// 			if ($(checkBoxes[i]).is(":checked")) {
// 			var price = parseInt($(checkBoxes[i]).val());
// 			if (price > highCheck) {
// 				highCheck = price;
// 			}
// 			}
// 		};
// 		if($(this).is(":checked")) {
// 			var high = parseInt($(this).val());
// 			var selectedHouses = filter(homeArray,(highCheck));
// 		}
// 		$(homeArray).hide();
// 		$(selectedHouses).show();


// 	});

// });


