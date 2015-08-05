

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
