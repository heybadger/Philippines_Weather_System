# 🌤️ Tibo Weather App

[![Status](https://img.shields.io/badge/Status-Active-success)]()
[![Made For](https://img.shields.io/badge/Made%20For-Philippines-blue)]()
[![OpenWeatherMap](https://img.shields.io/badge/API-OpenWeatherMap-orange)]()

> A modern weather application focused on the Philippines, featuring real-time weather data, hourly forecasts, and smart location search with a clean responsive interface.

![Tibo Weather Preview](images/weather-preview.png)

## ✨ Features

- 🌦️ **Real-Time Weather** - Live weather updates using OpenWeatherMap API
- 📍 **Geolocation Support** - Instantly check weather in your current location
- 🔎 **Smart PH Search** - Search provinces, cities, municipalities, and tourist spots
- ⚠️ **Weather Alert System** - Detects thunderstorms, heavy rain, strong winds, and typhoon-related conditions
- ⏱️ **Hourly Forecast** - View upcoming weather changes for the next hours
- 📅 **5-Day Forecast** - Extended weather predictions with temperature ranges
- 📱 **Responsive Design** - Works smoothly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Soft pastel weather-inspired interface with rounded cards and clean spacing

## 🛠️ Built With

- **HTML5** - Semantic structure and layout
- **CSS3** - Responsive styling and modern UI design
- **Vanilla JavaScript** - Weather logic, API fetching, and dynamic rendering
- **Font Awesome 6.5.2** - Icons for weather conditions and UI elements
- **OpenWeatherMap API** - Real-time weather and forecast data

## 📁 Project Structure

```bash
tibo-weather-app/
│
├── index.html        # Main HTML structure
├── style.css         # Weather app styling
├── script.js         # API handling and app logic
├── images/           # Screenshots / assets
│   └── weather-preview.png
└── README.md         # Documentation
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/tibo-weather-app.git
```

### 2. Open the project

Open `index.html` in your browser.

## 🔑 API Setup

This project uses the OpenWeatherMap API.

Get your free API key here:

https://openweathermap.org/api

Replace the API key inside `script.js`:

```js
const API_KEY = "YOUR_API_KEY";
```

## 🇵🇭 Supported Locations

The app contains a large built-in list of Philippine locations including:

- Provinces
- Cities
- Municipalities
- Tourist destinations

### Examples

- Manila
- Quezon City
- Cebu
- Davao City
- Baguio
- Boracay
- Siargao
- Palawan

## ⚠️ Alert System

The app automatically shows weather advisories for dangerous conditions.

### Current Alerts

- ⛈️ Thunderstorms
- 🌧️ Heavy Rain
- 🌪️ Strong Winds
- 🌀 Typhoon Conditions

## 🧠 Smart Features

### Province → Capital Conversion

Some provinces automatically map to their capital city for better weather search accuracy.

### Example

```txt
Palawan → Puerto Princesa
Aklan → Kalibo
Benguet → Baguio
```

## 🔮 Future Improvements

- 🌙 Dark Mode
- 🌡️ Celsius/Fahrenheit Toggle
- 🗺️ Weather Radar Maps
- 📡 PAGASA Integration
- 🔔 Push Notifications
- 🌧️ Rain Probability Indicator

## 👨‍💻 Author

Created by **Badger**

## 📜 License

This project is open-source and free to use.

## ⭐ Support

If you like this project:

- Star the repository ⭐
- Fork the project 🍴
- Share it with others 🚀

---
