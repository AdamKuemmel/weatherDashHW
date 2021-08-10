$("#citySearchBtn").on("click", function () {
  event.preventDefault();
  var city = $("#cityInput").val();
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
    //card 0
    $("#card-image").attr(
      "src",
      "http://openweathermap.org/img/wn/" +
        data.list[0].weather[0].icon +
        ".png"
    );
    $("#card-date").html(data.list[0].dt_txt);
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
    $("#card-date1").html(data.list[8].dt_txt);
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
    $("#card-date2").html(data.list[16].dt_txt);
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
    $("#card-date3").html(data.list[24].dt_txt);
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
    $("#card-date4").html(data.list[32].dt_txt);
    $("#card-temp4").html("temp: " + data.list[32].main.temp);
    $("#card-wind4").html("wind speed: " + data.list[32].wind.speed + " mph");
    $("#card-humidity4").html("humidity: " + data.list[32].main.humidity);
  });
});
