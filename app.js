

$(document).ready(function(){

	var houses = $("article");

	console.log(houses);
	//create new houses
	$(".image-container").append(
		$(createHouse(houses, "320000", "img/four.jpg", "$320,000")),
			$(createHouse(houses, "400000", "img/four.jpg", "$400,000")),
				$(createHouse(houses, "225000", "img/four.jpg", "$150,000"))
	);

	// houses = $("article");

	// add background texture option //
	$(".textures").append("<span class='forest'></span>");

	// change background texture //
	$('.textures span').on('click',function(e) {
		e.preventDefault();
		switch ($(this).attr("class")) {

		  case ("light"):
		  	$('body').css('background', 'url("img/tileable_wood_texture.png")', "no-repeat;");
		    break;

		  case ("dark"):
	  		$('body').css('background', 'url("img/dark_wood.png")', "no-repeat");
		    break;

		  case "forest":
	  		$('body').css('background', 'url("img/forest.jpg")', "no-repeat");
		    break;

		  default:
		    break;
		}
});
});

// filter by price
	$(".filters input").on('click', function(){
		var houses = $("article");
		var checked = $(".filters input:checkbox:checked");
		houses.hide();

		filterByPrice(checked, houses);


	//sort houses by price
	$(".sort a").on("click", function(e){
		e.preventDefault();
		console.log($(this).attr("class"));
		var sorted = highLow(houses, $(this).attr("class"));
		$(".image-container").empty();

		for (var i = 0; i < sorted.length; i++) {
			$(".image-container").append(sorted[i]);
		};

	});

// end of document ready
});




function filterByPrice(checked, houses){
		// make sure something is selected
	if(checked.length > 0){
		//loop through checked boxes
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
				};
			}
		};
	}
	else $("article").show();
};

function createHouse(array, data, jpg, priceTag){
	var newHome = ($(array[0]).clone())[0];
	$(newHome).attr("data-price", data);
	$(newHome).find("img").attr("src", jpg);
	$(newHome).find("h4").html(priceTag);
	return newHome;
};

function highLow (array, sort) {
	if (sort === "low"){
		var sorted = array.sort(function (a, b) {
			return $(a).data("price") - $(b).data("price");
		});
	}
	else {
		var sorted = array.sort(function (a, b) {
			return $(b).data("price") - $(a).data("price");
		});
	}
	return sorted;
}



