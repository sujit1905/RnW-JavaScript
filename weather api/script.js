// OpenWeather API key
const API_KEY = "5d73a99ff554352719be2118aab73699";

function getWeather() {
  // Get city name
  const city = document.getElementById("cityInput").value.trim();
  const resultBox = document.getElementById("weatherResult");

  // Empty input check
  if (city === "") {
    resultBox.style.display = "block";
    resultBox.innerText = "Please enter a city name";
    return;
  }

  // Loading state
  resultBox.style.display = "block";
  resultBox.innerText = "Loading...";

  // API URL
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      // City not found
      if (data.cod !== 200) {
        resultBox.innerText = "City not found";
        return;
      }

      // Display weather data
      resultBox.innerHTML = `
        <strong>${data.name}, ${data.sys.country}</strong><br><br>
        🌡 Temperature: ${data.main.temp} °C<br>
        ☁ Weather: ${data.weather[0].main}<br>
        💧 Humidity: ${data.main.humidity}%<br>
        💨 Wind Speed: ${data.wind.speed} m/s
      `;
    })
    .catch(() => {
      // Fetch error
      resultBox.innerText = "Error fetching data";
    });
}
