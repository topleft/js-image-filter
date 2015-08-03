

$(document).ready(function(){

	var houses = $(".home article");
	console.log(houses)


	//create new houses
	$(".image-container").append($(createHouse(houses, "320000", "img/four.jpg", "$320,000")));
	$(".image-container").append($(createHouse(houses, "400000", "img/four.jpg", "$400,000")));
	$(".image-container").append($(createHouse(houses, "150000", "img/four.jpg", "$150,000")));

	houses = $("article");

	$(".textures").append("<span class='forest'></span>");

	$('.light').on('click',function(e) {
		e.preventDefault();
		$('body').css('background', 'url("img/tileable_wood_texture.png")', "no-repeat;");
	});

	$('.dark').on('click',function(e) {
		e.preventDefault();
		$('body').css('background', 'url("img/dark_wood.png")', "no-repeat");

	});

	$('.forest').on('click',function(e) {
		e.preventDefault();
		$('body').css('background', 'url("img/forest.jpg")', "no-repeat");

	});


	$(".filters input").on('click', function(){
		houses.hide();

		var checked = $(".filters input:checkbox:checked")

		// make sure something is selected
		if(checked.length > 0){
			//looop through checked boxes
			for (var j = 0; j < checked.length; j++) {
				// set high price for current checked box
				var hiPrice = parseInt($(checked[j]).val());
				// look for 0-50,000 filter, it doesn't have upper sibling, needs to be set manually
				if(hiPrice === 50000)
					var lowPrice = 0;
				else
					var lowPrice = parseInt($(checked[j]).parent().prev().find("input")[0].value);

				for (var i = 0; i < houses.length; i++) {
					var housePrice = parseInt($(houses[i])[0].dataset.price);
					if(housePrice <= hiPrice && housePrice >= lowPrice){
						$(houses[i]).show();
						console.log($(checked[j]).val()+" > "+$("article")[i].dataset.price);
					};
				}
			};
		}
		else $("article").show();
	});

	$(".sort .low").on("click", function(e){
		e.preventDefault();
		console.log($(".image-container").children());
		$(".image-container").children().sort(function (a, b) {
			return (parseInt($(a).attr("data-price")) - parseInt($(b).attr("data-price")));
		});
	});
});


function createHouse(array, data, jpg, priceTag){

	var newHome = ($(array[0]).clone())[0];
	$(newHome).attr("data-price", data);
	$(newHome).find("img").attr("src", jpg);
	$(newHome).find("h4").html(priceTag);
	return newHome;
};

function highLow (array) {
	var sorted = array.sort(function (a, b) {
		parseInt($(a).attr("data-price")) - parseInt($(b).attr("data-price"));
	});
  	return sorted;
}





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


