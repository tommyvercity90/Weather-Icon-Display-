# 🌦️ Weather Icon Display

A simple and interactive weather display application built using HTML, CSS, and JavaScript. Select a weather condition from the dropdown to see its matching icon, description, and background theme.

## ✨ Features

- 🌤️ Dropdown menu with 7 weather conditions
- ☀️ Dynamic weather icons and descriptions
- 🎨 Different background colors for each condition
- ✨ Smooth transitions and floating icon animation
- 📱 Responsive design for desktop and mobile devices
- 🔄 Default welcome screen before selection
- ⚡ No API or external library required
- 📦 Static weather data stored in a JavaScript object

## 🛠️ Technologies Used

- **HTML5** — Page structure and dropdown
- **CSS3** — Styling, animations, transitions, and responsive layout
- **JavaScript** — Conditional rendering and dynamic updates
- **Emoji** — Weather icons

## 🌈 Weather Conditions

| Condition | Icon | Description |
|---|---|---|
| Sunny | ☀️ | Bright sunshine and clear skies |
| Cloudy | ☁️ | Clouds covering the sky |
| Rainy | 🌧️ | Rainfall and cloudy weather |
| Stormy | ⛈️ | Thunderstorms may occur |
| Snowy | ❄️ | Cold weather with snow |
| Windy | 💨 | Strong winds are blowing |
| Foggy | 🌫️ | Reduced visibility due to fog |

## 📁 Project Structure

```text
weather-icon-display/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-icon-display.git
```

Replace `your-username` with your GitHub username.

### 2. Navigate to the Project Folder

```bash
cd weather-icon-display
```

### 3. Run the Project

Open `index.html` in your web browser.

You can also use the **Live Server** extension in Visual Studio Code for a convenient development experience.

## 💡 How It Works

1. The user selects a weather condition from the dropdown.
2. JavaScript detects the selection using the `change` event.
3. The selected value is used to retrieve matching data from the `weatherData` object.
4. The weather icon, title, and description are updated dynamically.
5. CSS background classes change the page's appearance according to the selected condition.

### Example: Weather Data Object

```javascript
const weatherData = {
    sunny: {
        icon: "☀️",
        title: "Sunny",
        description: "Bright sunshine and clear skies."
    },

    rainy: {
        icon: "🌧️",
        title: "Rainy",
        description: "Rain is falling. Carry an umbrella!"
    }
};
```

The application uses an object to associate each weather condition with its corresponding information.

## 📚 Concepts Practiced

- JavaScript objects and key-value pairs
- DOM manipulation
- `addEventListener()`
- The `change` event
- Conditional rendering using `if` statements
- Dynamic CSS class updates
- Responsive web design
- CSS transitions and keyframe animations

## 🎯 Project Objective

The goal of this project is to practice mapping static data to a user interface and updating webpage content dynamically based on user input.

## 🔮 Future Improvements

- Add temperature and humidity displays using sample data.
- Add more weather conditions and custom icons.
- Include light and dark themes.
- Add a search feature for weather conditions.
- Improve accessibility with enhanced keyboard navigation.

