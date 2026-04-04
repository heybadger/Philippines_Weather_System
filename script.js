class Badger {
    constructor() {
      this.phLocations = {
        'manila': { name: 'Metro Manila', lat: 14.5995, lon: 120.9842, temp: 29, humidity: 78 },
        'cebu': { name: 'Cebu City', lat: 10.3157, lon: 123.8854, temp: 31, humidity: 72 },
        'davao': { name: 'Davao City', lat: 7.0731, lon: 125.6128, temp: 32, humidity: 68 },
        'baguio': { name: 'Baguio City', lat: 16.4023, lon: 120.5960, temp: 22, humidity: 85 },
        'iloilo': { name: 'Iloilo City', lat: 10.6969, lon: 122.5644, temp: 30, humidity: 76 },
        'quezon': { name: 'Quezon City', lat: 14.6485, lon: 121.0304, temp: 28, humidity: 80 }
      };
      
      this.init();
    }
  
    init() {
      this.bindEvents();
      this.loadDefaultWeather('manila');
    }
  
    bindEvents() {
      document.getElementById('searchBtn').onclick = () => this.searchWeather();
      document.getElementById('searchInput').onkeypress = (e) => {
        if (e.key === 'Enter') this.searchWeather();
      };
      document.getElementById('geoBtn').onclick = () => this.getLocation();
    }
  
    searchWeather() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();
      const location = this.phLocations[query];
      
      if (location) {
        this.loadWeatherData(location);
        document.getElementById('currentLocation').textContent = location.name;
        document.getElementById('searchInput').value = '';
      } else {
        alert('Try: manila, cebu, davao, baguio, iloilo, quezon');
      }
    }
  
    getLocation() {
      if (navigator.geolocation) {
        document.getElementById('loading').style.display = 'block';
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Mock PH location based on coords
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            this.handleLocation(lat, lon);
          },
          () => {
            this.loadDefaultWeather('manila');
          }
        );
      } else {
        this.loadDefaultWeather('manila');
      }
    }
  
    handleLocation(lat, lon) {
      // PH location detection (simple bounds check)
      if (lat > 4.5 && lat < 21.5 && lon > 116 && lon < 127) {
        this.loadDefaultWeather('manila'); // Use Manila as PH default
        document.getElementById('currentLocation').textContent = 'Your Location (PH)';
      } else {
        this.loadDefaultWeather('manila');
      }
    }
  
    loadDefaultWeather(key) {
      const location = this.phLocations[key];
      this.loadWeatherData(location);
      document.getElementById('currentLocation').textContent = location.name;
    }
  
    loadWeatherData(location) {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('currentWeather').style.display = 'block';
  
      // Current weather
      document.getElementById('temp').textContent = location.temp;
      document.getElementById('cityName').textContent = location.name;
      document.getElementById('description').textContent = this.getRandomDescription();
      document.getElementById('humidity').textContent = location.humidity + '%';
      document.getElementById('wind').textContent = (3 + Math.random() * 5).toFixed(1) + ' m/s';
      document.getElementById('visibility').textContent = '10 km';
      document.getElementById('feelsLike').textContent = (location.temp + 2) + '°';
  
      // Random weather icon
      const icons = ['fa-sun', 'fa-cloud-sun', 'fa-cloud', 'fa-cloud-rain', 'fa-bolt'];
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      document.getElementById('weatherIcon').className = `fas ${randomIcon}`;
  
      // Typhoon alert (random 10% chance)
      if (Math.random() < 0.1) {
        document.getElementById('typhoonAlert').style.display = 'flex';
      }
  
      // Generate forecasts
      this.generateHourlyForecast();
      this.generateDailyForecast();
    }
  
    getRandomDescription() {
      const descriptions = [
        'Clear sky', 'Partly cloudy', 'Cloudy', 'Light rain', 'Scattered clouds',
        'Few clouds', 'Broken clouds', 'Shower rain', 'Thunderstorm'
      ];
      return descriptions[Math.floor(Math.random() * descriptions.length)];
    }
  
    generateHourlyForecast() {
      const container = document.getElementById('hourlyForecast');
      container.innerHTML = '';
  
      const now = new Date();
      for (let i = 0; i < 12; i++) {
        const time = new Date(now.getTime() + i * 60 * 60 * 1000);
        const hour = time.getHours();
        const temp = 25 + Math.floor(Math.random() * 10);
        const icons = ['fa-sun', 'fa-cloud-sun', 'fa-cloud', 'fa-cloud-rain'];
  
        const div = document.createElement('div');
        div.className = 'hourly-item';
        div.innerHTML = `
          <div class="hourly-time">${hour}:00</div>
          <i class="fas ${icons[Math.floor(Math.random()*icons.length)]} hourly-icon"></i>
          <div class="hourly-temp">${temp}°</div>
        `;
        container.appendChild(div);
      }
    }
  
    generateDailyForecast() {
      const container = document.getElementById('dailyForecast');
      container.innerHTML = '';
  
      const days = ['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri'];
      for (let i = 0; i < 5; i++) {
        const minTemp = 24 + Math.floor(Math.random() * 5);
        const maxTemp = minTemp + 4 + Math.floor(Math.random() * 4);
        const icons = ['fa-sun', 'fa-cloud-sun', 'fa-cloud', 'fa-cloud-rain'];
  
        const div = document.createElement('div');
        div.className = 'daily-item';
        div.innerHTML = `
          <div class="day-name">${days[i]}</div>
          <i class="fas ${icons[Math.floor(Math.random()*icons.length)]} daily-icon"></i>
          <div class="daily-temps">
            <span>${minTemp}°</span>
            <span>${maxTemp}°</span>
          </div>
        `;
        container.appendChild(div);
      }
    }
  }
  
  // START THE APP
  document.addEventListener('DOMContentLoaded', () => {
    new PinoyWeatherApp();
  });
