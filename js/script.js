let weatherApiKey = "a5aaed97d516398c3d6e80326f9de7d0";
let rootUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" +
  weatherApiKey;

let getWeatherByCity = async (city) => {
  let endpoint = rootUrl + "&q=" + city;
  let response = await fetch(endpoint);
  console.log(response.json());
};
getWeatherByCity("london");
