
const weatherData = {
    sunny: {
        icon: "☀️",
        title: "Sunny",
        description: "Bright sunshine and clear skies. A beautiful sunny day!",
        cardColor: "#fff3c4"
    },

    cloudy: {
        icon: "☁️",
        title: "Cloudy",
        description: "Clouds are covering the sky. The sun may appear occasionally.",
        cardColor: "#e3eaf2"
    },

    rainy: {
        icon: "🌧️",
        title: "Rainy",
        description: "Rain is falling. Don't forget to carry an umbrella!",
        cardColor: "#dce8f5"
    },

    stormy: {
        icon: "⛈️",
        title: "Stormy",
        description: "Thunderstorms may occur. Stay somewhere safe indoors.",
        cardColor: "#d9d9e8"
    },

    snowy: {
        icon: "❄️",
        title: "Snowy",
        description: "It's snowy and cold. Stay warm and enjoy the winter!",
        cardColor: "#e7f4ff"
    },

    windy: {
        icon: "💨",
        title: "Windy",
        description: "Strong winds are blowing. Secure any loose outdoor items.",
        cardColor: "#d9f2ff"
    },

    foggy: {
        icon: "🌫️",
        title: "Foggy",
        description: "Fog is reducing visibility. Be careful when travelling.",
        cardColor: "#e0e4e5"
    }
};

const weatherSelect = document.getElementById("weatherSelect");
const weatherIcon = document.getElementById("weatherIcon");
const weatherTitle = document.getElementById("weatherTitle");
const weatherDescription = document.getElementById("weatherDescription");
const weatherCard = document.getElementById("weatherCard");

weatherSelect.addEventListener("change", function () {
    const selectedWeather = weatherSelect.value;

    // Handle the default state
    if (selectedWeather === "") {
        weatherIcon.textContent = "🌤️";
        weatherTitle.textContent = "Welcome!";
        weatherDescription.textContent =
            "Select a condition to explore the weather.";

        weatherCard.style.background = "#edf5ff";
        document.body.className = "";
        return;
    }

    // Get the selected weather data
    const weather = weatherData[selectedWeather];

    // Update the displayed information
    weatherIcon.textContent = weather.icon;
    weatherTitle.textContent = weather.title;
    weatherDescription.textContent = weather.description;

    // Update the card and page backgrounds
    weatherCard.style.background = weather.cardColor;
    document.body.className = selectedWeather;
});
