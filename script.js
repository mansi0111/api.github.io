var city = "Delhi";
$.getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=metric&APPID=b01f012116a1320723456538eaa6e882",
  function (data) {
    console.log(data);
    var icon =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = data.main.temp;
    var weather = data.weather[0].main;
    $(".icon").attr("src", icon);
    $(".temp").append(temp);
    $(".weather").append(weather);
  }
);
