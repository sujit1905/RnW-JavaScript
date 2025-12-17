const API_KEY = "5d73a99ff554352719be2118aab73699";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultBox = document.getElementById("weatherResult");

  if (city === "") {
    resultBox.style.display = "block";
    resultBox.innerText = "Please enter a city name";
    return;
  }

  resultBox.style.display = "block";
  resultBox.innerText = "Loading...";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        resultBox.innerText = "City not found";
        return;
      }

      resultBox.innerHTML = `
        <strong>${data.name}, ${data.sys.country}</strong><br><br>
        🌡 Temperature: ${data.main.temp} °C<br>
        ☁ Weather: ${data.weather[0].main}<br>
        💧 Humidity: ${data.main.humidity}%<br>
        💨 Wind Speed: ${data.wind.speed} m/s
      `;
    })
    .catch(() => {
      resultBox.innerText = "Error fetching data";
    });
}
