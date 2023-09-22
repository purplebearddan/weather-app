// goto geoapify.com to get a free api key
const apiKey = "15aa0412ed2c47f0955823f2a8a601d7";

const getWeather = async (searchQuery) => {
  const locationAPIURL = `https://api.geoapify.com/v1/geocode/search?text=${searchQuery}&format=json&apiKey=${apiKey}`;

  const data = await fetch(locationAPIURL);
  console.log(data);
  const { results } = await data.json();
  const { lon, lat } = results[0];

  console.log(lon, lat);
  if (lon && lat && data.status === 200) {
    const weatherAPIURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&windspeed_unit=mph&timezone=GMT`;
    const weatherData = await fetch(weatherAPIURL);
    const weatherResults = await weatherData.json();
    console.log(weatherResults);
  } else {
    // please try again
  }
};

window.addEventListener("load", () => {
  getWeather(prompt("Enter a City name"));
});
