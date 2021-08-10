//
var city = "";

$("#citySearchBtn").on('click', function localData() {
    event.preventDefault();

  var searchURL =
    "api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=d5da65a1b7938f90d55e1d6961ade256";
  console.log(searchURL);
$.ajax({ url: searchURL, method: "GET"})
}
