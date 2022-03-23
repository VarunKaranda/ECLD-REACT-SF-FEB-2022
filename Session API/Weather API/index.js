window.addEventListener("load", function () {
  let button = document.getElementById("button");
  button.addEventListener("click", getWeather);
});
function getWeather() {
  // let xhr = new XMLHttpRequest();
  let input = document.getElementById("input").value;
  // xhr.open(
  //   "GET",
  //   `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=fd2be4bb19fc6e8a08baa952595778b2`
  // );
  // xhr.send();
  // xhr.onload = function () {
  //   let response = JSON.parse(this.response);
  //   //console.log(response);

  //   let weather = document.getElementById("weather");
  //   let city = document.createElement("h1");
  //   city.innerHTML = response.name;
  //   let temp = document.createElement("p");
  //   temp.innerHTML =
  //     "Temperature: " + Math.round(response.main.temp - 273.15) + "&#8451;";
  //   let press = document.createElement("p");
  //   press.innerHTML = "Pressure: " + response.main.pressure + " hPa";
  //   let clouds = document.createElement("p");
  //   clouds.innerHTML = "Clouds: " + response.clouds.all + "%";
  //   let wind = document.createElement("p");
  //   wind.innerHTML = "Wind: " + response.wind.speed + " m/s";
  //   weather.append(city, temp, press, clouds, wind);
  // };
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=fd2be4bb19fc6e8a08baa952595778b2`
  ).then((response) => {
    return response.json()
  }).then((data) => {
    let weather = document.getElementById("weather");
      let city = document.createElement("h1");
      city.innerHTML = data.name;
      let temp = document.createElement("p");
      temp.innerHTML =
        "Temperature: " + Math.round(data.main.temp - 273.15) + "&#8451;";
      let press = document.createElement("p");
      press.innerHTML = "Pressure: " + data.main.pressure + " hPa";
      let clouds = document.createElement("p");
      clouds.innerHTML = "Clouds: " + data.clouds.all + "%";
      let wind = document.createElement("p");
      wind.innerHTML = "Wind: " + data.wind.speed + " m/s";
      weather.append(city, temp, press, clouds, wind);
  }).catch((error) => {
    console.log("Rejected:", error);
  })
}
