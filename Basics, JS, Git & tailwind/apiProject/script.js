document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const checkBtn = document.getElementById("check-weather");
  const weatherResult = document.getElementById("weather-result");
  let cityName = weatherResult.querySelector(".city");
  let tempResult = weatherResult.querySelector(".temprature");
  let windResult = weatherResult.querySelector(".wind");
  let resultBox = weatherResult.querySelector(".resultBox");
  const fetchInProcess = weatherResult.querySelector(".fetching");

  cityInput.addEventListener("keyup", () => {
    let typingError = document.querySelector(".errorMessage");
    if (cityInput.value.length < 3) {
      typingError.textContent = "Type atleast Three letters";
      checkBtn.disabled = true;
    } else {
      typingError.textContent = "";
      checkBtn.disabled = false;
    }
  });

  const API_KEY = "735d65963a69087611aab6d54dd21bd5";

  checkBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // It may throw  a error
    // server is in another continent (It will take time)

    try {
      fetchInProcess.classList.remove("hidden");
      const WeatherData = await fetchWeather(city);
      displayWeather(WeatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeather(city) {
    // get data
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Error fetching resposne");
    }
    const data = await response.json();
    return data;
  }

  function displayWeather(data) {
    if (data) {
      fetchInProcess.classList.add("hidden");
      resultBox.classList.remove("hidden");
      cityName.textContent = data.name;
      tempResult.textContent = data.main.temp;
      windResult.textContent = data.wind.speed;
    }
  }

  function showError() {}
});
