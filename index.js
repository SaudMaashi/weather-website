const apiKey = "13d06f44349d2545acb143c3496b2378";

document.getElementById("search-button").addEventListener("click", async function () {
    const cityName = document.getElementById("city-name-input").value.trim();
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=metric";
    if (cityName === "") {
        return alert("Please enter a city name.");
    }
    document.getElementById("loading").style.display = "block";
    try {
        const response = await fetch(url);
        const data = await response.json();
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        document.getElementById("city").innerHTML = cityName;
        document.getElementById("temp").innerHTML = temperature + "°C";
        document.getElementById("humidity").innerHTML = humidity + "%";
        document.getElementById("wind-speed").innerHTML = windSpeed + "km/h";
        document.getElementById("loading").style.display = "none";
    } catch (exception) {
        return alert("Failed to fetch weather data. Please check the city name and try again.");
    } finally {
        document.getElementById("loading").style.display = "none";
    }
});