function displayTemperature(response) {
  let temperatureElement = document.querySelector(".current-weather");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector(".search-box");
  let city = searchInputElement.value;

  let apiKey = "b6t3cfd0645ebc0e3f49539d885oa6a4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let searchBox = document.querySelector(".input-form");
searchBox.addEventListener(`submit`, search);
