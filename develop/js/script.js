var recentCity = [];
var recentSearch = $("#recentSearch");
const recentInput = localStorage.getItem("recentStor");
console.log(recentInput);
function renderCities() {
  var newButton = $("<button>").text(recentInput);
  $("#recentSearch").append(newButton);
}
//daily weather display
$("#citySearchBtn").on("click", function () {
  var city = $("#cityInput").val();
  var dailyURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&cnt=40&appid=d5da65a1b7938f90d55e1d6961ade256";

  $.ajax({ url: dailyURL, method: "GET" }).then(function (dailyDATA) {
    console.log(dailyDATA.list[0].main.humidity);
    $("#weatherCity").text(dailyDATA.city.name);
    $("#weatherTemp").text(dailyDATA.list[0].main.temp + "°" + "F");
    $("#weatherWind").text("Wind Speed = " + dailyDATA.list[0].wind.speed);
    $("#weatherHumid").text("Humidity = " + dailyDATA.list[0].main.humidity);
  });
});

//local storage
$("#citySearchBtn").on("click", function (event) {
  event.preventDefault();
  var city = $("#cityInput").val();
  var cityIn = $("#cityInput");
  localStorage.setItem("recentStor", city);
  var searchURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&cnt=40&appid=d5da65a1b7938f90d55e1d6961ade256";

  $.ajax({
    url: searchURL,
    method: "GET",
  }).then(function (data) {
    console.log(data); //0 8 16 24 32
    $(".card-group").removeClass("hide");
    $(".card").removeClass("hide");

    //daily
    console.log(data.list[0].main.temp + "°" + "F");

    //card 0
    $("#card-image").attr(
      "src",
      "http://openweathermap.org/img/wn/" +
        data.list[0].weather[0].icon +
        ".png"
    );
    $("#card-date").html(moment().format("l"));
    $("#card-temp").html("temp: " + data.list[0].main.temp);
    $("#card-wind").html("wind speed: " + data.list[0].wind.speed + " mph");
    $("#card-humidity").html("humidity: " + data.list[0].main.humidity);
    //card1
    $("#card-image1").attr(
      "src",
      "http://openweathermap.org/img/wn/" +
        data.list[0].weather[0].icon +
        ".png"
    );
    $("#card-date1").html(moment().add(1, "days").calendar());
    $("#card-temp1").html("temp: " + data.list[8].main.temp);
    $("#card-wind1").html("wind speed: " + data.list[8].wind.speed + " mph");
    $("#card-humidity1").html("humidity: " + data.list[8].main.humidity);
    //card2
    $("#card-image2").attr(
      "src",
      "http://openweathermap.org/img/wn/" +
        data.list[16].weather[0].icon +
        ".png"
    );
    $("#card-date2").html(moment().add(2, "days").calendar());
    $("#card-temp2").html("temp: " + data.list[16].main.temp);
    $("#card-wind2").html("wind speed: " + data.list[16].wind.speed + " mph");
    $("#card-humidity2").html("humidity: " + data.list[16].main.humidity);
    //card3
    $("#card-image3").attr(
      "src",
      "http://openweathermap.org/img/wn/" +
        data.list[24].weather[0].icon +
        ".png"
    );
    $("#card-date3").html(moment().add(3, "days").calendar());
    $("#card-temp3").html("temp: " + data.list[24].main.temp);
    $("#card-wind3").html("wind speed: " + data.list[24].wind.speed + " mph");
    $("#card-humidity3").html("humidity: " + data.list[24].main.humidity);
    //caRD4
    $("#card-image4").attr(
      "src",
      "http://openweathermap.org/img/wn/" +
        data.list[32].weather[0].icon +
        ".png"
    );
    $("#card-date4").html(moment().add(4, "days").calendar());
    $("#card-temp4").html("temp: " + data.list[32].main.temp);
    $("#card-wind4").html("wind speed: " + data.list[32].wind.speed + " mph");
    $("#card-humidity4").html("humidity: " + data.list[32].main.humidity);
    renderCities();
  });
});
