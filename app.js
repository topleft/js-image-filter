

$(document).ready(function(){

	// add background texture option //
	$(".textures").append("<span class='forest'></span>");

	var houses = $("article");

	//create new houses
	$(".image-container").append(
		$(createHouse(houses, "320000", "img/four.jpg", "$320,000")),
			$(createHouse(houses, "400000", "img/four.jpg", "$400,000")),
				$(createHouse(houses, "225000", "img/four.jpg", "$150,000"))
	);



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


// filter by price
	$(".filters input").on('click', function(){
		var houses = $("article");
		var checked = $(".filters input:checkbox:checked");
		houses.hide();

		filterByPrice(checked, houses);
	});


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





