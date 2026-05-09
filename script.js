const provinceToCapital = {
  Aklan: "Kalibo", Antique: "San Jose", Capiz: "Roxas City", Guimaras: "Jordan",
  Iloilo: "Iloilo City", "Negros Occidental": "Bacolod", "Negros Oriental": "Dumaguete",
  Bohol: "Tagbilaran", Siquijor: "Siquijor", "Eastern Samar": "Borongan",
  "Northern Samar": "Catarman", "Samar (Western)": "Catbalogan", Leyte: "Tacloban",
  "Southern Leyte": "Maasin", Biliran: "Naval", "Zamboanga del Norte": "Dipolog",
  "Zamboanga del Sur": "Pagadian", "Zamboanga Sibugay": "Ipil", Bukidnon: "Malaybalay",
  Camiguin: "Mambajao", "Lanao del Norte": "Iligan", "Lanao del Sur": "Marawi",
  "Misamis Occidental": "Oroquieta", "Misamis Oriental": "Cagayan de Oro",
  "Davao del Norte": "Tagum", "Davao del Sur": "Davao City", "Davao Occidental": "Malita",
  "Davao Oriental": "Mati", "Davao de Oro": "Nabunturan", "Cotabato (North Cotabato)": "Kidapawan",
  "Sultan Kudarat": "Isulan", "South Cotabato": "Koronadal", Sarangani: "Alabel",
  "Agusan del Norte": "Butuan", "Agusan del Sur": "Prosperidad", "Surigao del Norte": "Surigao City",
  "Surigao del Sur": "Tandag", "Dinagat Islands": "San Jose", Basilan: "Lamitan",
  Sulu: "Jolo", "Tawi-Tawi": "Bongao", Maguindanao: "Shariff Aguak", Abra: "Bangued",
  Apayao: "Luna", Benguet: "Baguio", Ifugao: "Lagawe", Kalinga: "Tabuk",
  "Mountain Province": "Bontoc", "Ilocos Norte": "Laoag", "Ilocos Sur": "Vigan",
  "La Union": "San Fernando", Pangasinan: "Lingayen", Cagayan: "Tuguegarao",
  Isabela: "Ilagan", "Nueva Vizcaya": "Bayombong", Quirino: "Cabarroguis",
  Batanes: "Basco", Aurora: "Baler", Bulacan: "Malolos", Pampanga: "San Fernando",
  Tarlac: "Tarlac City", "Nueva Ecija": "Palayan", Zambales: "Iba", Bataan: "Balanga",
  Rizal: "Antipolo", Laguna: "Santa Cruz", Batangas: "Batangas City",
  "Quezon Province": "Lucena", "Camarines Norte": "Daet", "Camarines Sur": "Naga",
  Albay: "Legazpi", Sorsogon: "Sorsogon City", Masbate: "Masbate City",
  Catanduanes: "Virac", Marinduque: "Boac", Romblon: "Romblon", Palawan: "Puerto Princesa",
  "Mindoro Occidental": "Mamburao", "Mindoro Oriental": "Calapan"
};

const philippineLocations = [
  "Manila", "Quezon City", "Caloocan", "Las Piñas", "Makati", "Malabon", "Mandaluyong",
  "Marikina", "Muntinlupa", "Navotas", "Parañaque", "Pasay", "Pasig", "Pateros", "San Juan",
  "Taguig", "Valenzuela", "Abra", "Bangued", "Apayao", "Luna", "Benguet", "Baguio",
  "La Trinidad", "Ifugao", "Lagawe", "Banaue", "Kalinga", "Tabuk", "Mountain Province",
  "Bontoc", "Sagada", "Ilocos Norte", "Laoag", "Ilocos Sur", "Vigan", "Candon",
  "La Union", "San Fernando", "Pangasinan", "Lingayen", "Dagupan", "Alaminos", "Urdaneta",
  "Cagayan", "Tuguegarao", "Aparri", "Isabela", "Ilagan", "Cauayan", "Santiago",
  "Nueva Vizcaya", "Bayombong", "Quirino", "Cabarroguis", "Batanes", "Basco", "Aurora",
  "Baler", "Bulacan", "Malolos", "Meycauayan", "San Jose del Monte", "Baliwag", "Pampanga",
  "Angeles City", "Mabalacat", "Tarlac", "Tarlac City", "Concepcion", "Nueva Ecija",
  "Palayan", "Cabanatuan", "Gapan", "Science City of Muñoz", "Zambales", "Iba", "Olongapo",
  "Bataan", "Balanga", "Mariveles", "Rizal", "Antipolo", "Cainta", "Laguna", "Santa Cruz",
  "Calamba", "Biñan", "San Pablo", "Santa Rosa", "Cabuyao", "Batangas", "Batangas City",
  "Lipa", "Tanauan", "Quezon Province", "Lucena", "Tayabas", "Infanta", "Camarines Norte",
  "Daet", "Camarines Sur", "Naga", "Iriga", "Legazpi", "Albay", "Tabaco", "Ligao",
  "Sorsogon", "Sorsogon City", "Masbate", "Masbate City", "Catanduanes", "Virac",
  "Marinduque", "Boac", "Romblon", "Romblon", "Palawan", "Puerto Princesa", "El Nido",
  "Coron", "Mindoro Occidental", "Mamburao", "Mindoro Oriental", "Calapan", "Aklan",
  "Kalibo", "Boracay", "Antique", "San Jose", "Capiz", "Roxas City", "Iloilo",
  "Iloilo City", "Passi", "Guimaras", "Jordan", "Negros Occidental", "Bacolod", "Silay",
  "Kabankalan", "Negros Oriental", "Dumaguete", "Bais", "Cebu", "Cebu City", "Mandaue",
  "Lapu-Lapu", "Toledo", "Danao", "Bohol", "Tagbilaran", "Siquijor", "Eastern Samar",
  "Borongan", "Northern Samar", "Catarman", "Samar (Western)", "Catbalogan", "Calbayog",
  "Leyte", "Tacloban", "Ormoc", "Baybay", "Southern Leyte", "Maasin", "Biliran", "Naval",
  "Zamboanga del Norte", "Dipolog", "Dapitan", "Zamboanga del Sur", "Pagadian",
  "Zamboanga City", "Zamboanga Sibugay", "Ipil", "Bukidnon", "Malaybalay", "Valencia",
  "Camiguin", "Mambajao", "Lanao del Norte", "Iligan", "Tubod", "Lanao del Sur", "Marawi",
  "Misamis Occidental", "Oroquieta", "Ozamiz", "Misamis Oriental", "Cagayan de Oro",
  "Gingoog", "Davao del Norte", "Tagum", "Panabo", "Davao del Sur", "Davao City", "Digos",
  "Davao Occidental", "Malita", "Davao Oriental", "Mati", "Davao de Oro", "Nabunturan",
  "Cotabato (North Cotabato)", "Kidapawan", "Midsayap", "Sultan Kudarat", "Isulan",
  "Tacurong", "South Cotabato", "Koronadal", "General Santos", "Sarangani", "Alabel",
  "Agusan del Norte", "Butuan", "Cabadbaran", "Agusan del Sur", "Prosperidad", "Bayugan",
  "Surigao del Norte", "Surigao City", "Siargao", "Surigao del Sur", "Tandag", "Bislig",
  "Dinagat Islands", "Basilan", "Lamitan", "Isabela City", "Sulu", "Jolo", "Tawi-Tawi",
  "Bongao", "Maguindanao", "Shariff Aguak", "Cotabato City"
];

const uniqueLocations = [...new Set(philippineLocations.map(l => l.trim()))].sort((a, b) => a.localeCompare(b));
const datalist = document.getElementById("philippines-locations");

function populateDatalist() {
  datalist.innerHTML = "";
  for (let loc of uniqueLocations) {
    const option = document.createElement("option");
    option.value = loc;
    datalist.appendChild(option);
  }
}
populateDatalist();

function getSearchableLocation(input) {
  return provinceToCapital[input] || input;
}

const API_KEY = "bd5e378503939ddaee76f12ad7a97608";
const CURRENT_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const geoBtn = document.getElementById("geoBtn");
const loadingDiv = document.getElementById("loading");
const currentWeatherDiv = document.getElementById("currentWeather");
const tempSpan = document.getElementById("temp");
const cityNameSpan = document.getElementById("cityName");
const descriptionSpan = document.getElementById("description");
const humiditySpan = document.getElementById("humidity");
const windSpan = document.getElementById("wind");
const visibilitySpan = document.getElementById("visibility");
const feelsLikeSpan = document.getElementById("feelsLike");
const weatherIconDiv = document.getElementById("weatherIcon");
const currentLocationSpan = document.getElementById("currentLocation");
const alertBanner = document.getElementById("typhoonAlert");
const alertTextSpan = document.getElementById("alertText");
const hourlyContainer = document.getElementById("hourlyForecast");
const dailyContainer = document.getElementById("dailyForecast");

function showLoading() {
  loadingDiv.style.display = "flex";
  currentWeatherDiv.style.display = "none";
}

function hideLoading() {
  loadingDiv.style.display = "none";
  currentWeatherDiv.style.display = "block";
}

function getWeatherIconClass(id) {
  if (id >= 200 && id < 300) return "fa-bolt";
  if (id >= 300 && id < 400) return "fa-cloud-rain";
  if (id >= 500 && id < 600) return "fa-cloud-showers-heavy";
  if (id >= 600 && id < 700) return "fa-snowflake";
  if (id === 800) return "fa-sun";
  if (id === 801) return "fa-cloud-sun";
  if (id > 801 && id < 805) return "fa-cloud";
  return "fa-cloud-sun";
}

function updateAlert(weatherId, windSpeed, desc) {
  let show = false, msg = "";
  if (weatherId >= 200 && weatherId < 300) {
    msg = "THUNDERSTORM: Lightning risk, stay safe!";
    show = true;
  } else if (weatherId >= 500 && weatherId < 600 && desc?.includes("heavy")) {
    msg = "Heavy rain alert — possible flash floods.";
    show = true;
  } else if (windSpeed > 12) {
    msg = `Strong winds ${windSpeed.toFixed(1)} m/s! Caution advised.`;
    show = true;
  } else if (desc?.toLowerCase().includes("typhoon")) {
    msg = "Typhoon alert: take precautions.";
    show = true;
  }
  if (show) {
    alertTextSpan.innerText = msg;
    alertBanner.style.display = "flex";
  } else {
    alertBanner.style.display = "none";
  }
}

function displayCurrentWeather(data) {
  tempSpan.innerText = Math.round(data.main.temp);
  cityNameSpan.innerText = data.name;
  const desc = data.weather[0].description;
  descriptionSpan.innerText = desc;
  humiditySpan.innerText = `${data.main.humidity}%`;
  windSpan.innerText = `${data.wind.speed.toFixed(1)} m/s`;
  const visKm = (data.visibility / 1000).toFixed(1);
  visibilitySpan.innerText = `${visKm} km`;
  feelsLikeSpan.innerText = `${Math.round(data.main.feels_like)}°`;
  currentLocationSpan.innerText = data.name;
  const iconClass = getWeatherIconClass(data.weather[0].id);
  weatherIconDiv.innerHTML = `<i class="fas ${iconClass}"></i>`;
  updateAlert(data.weather[0].id, data.wind.speed, desc);
}

function renderHourly(forecastData) {
  if (!hourlyContainer) return;
  hourlyContainer.innerHTML = "";
  if (!forecastData?.list || forecastData.list.length === 0) {
    for (let i = 0; i < 4; i++) {
      const fallback = document.createElement("div");
      fallback.className = "hourly-item";
      fallback.innerHTML = `<div>--:--</div><i class="fas fa-cloud-sun"></i><div>--°</div>`;
      hourlyContainer.appendChild(fallback);
    }
    return;
  }
  const now = Date.now() / 1000;
  let items = forecastData.list.filter(i => i.dt > now).slice(0, 6);
  if (items.length < 4 && forecastData.list.length >= 4) items = forecastData.list.slice(0, 4);
  for (let item of items) {
    const date = new Date(item.dt * 1000);
    let h = date.getHours();
    const ampm = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    const icon = getWeatherIconClass(item.weather[0].id);
    const temp = Math.round(item.main.temp);
    const div = document.createElement("div");
    div.className = "hourly-item";
    div.innerHTML = `<div class="hourly-time">${hour12}${ampm}</div><i class="fas ${icon} hourly-icon"></i><div class="hourly-temp">${temp}°</div>`;
    hourlyContainer.appendChild(div);
  }
  if (items.length === 0) {
    for (let i = 0; i < 4; i++) {
      const empty = document.createElement("div");
      empty.className = "hourly-item";
      empty.innerHTML = `<div>--:--</div><i class="fas fa-cloud-sun"></i><div>--°</div>`;
      hourlyContainer.appendChild(empty);
    }
  }
}

function renderDaily(forecastData) {
  if (!dailyContainer) return;
  dailyContainer.innerHTML = "";
  if (!forecastData?.list || forecastData.list.length === 0) {
    for (let i = 0; i < 5; i++) {
      const fall = document.createElement("div");
      fall.className = "daily-item";
      fall.innerHTML = `<div>Day</div><i class="fas fa-cloud-sun"></i><div>--° --°</div>`;
      dailyContainer.appendChild(fall);
    }
    return;
  }
  const dailyMap = new Map();
  for (let item of forecastData.list) {
    const dayKey = new Date(item.dt * 1000).toISOString().split("T")[0];
    if (!dailyMap.has(dayKey)) {
      dailyMap.set(dayKey, {
        min: item.main.temp_min,
        max: item.main.temp_max,
        id: item.weather[0].id,
        date: new Date(item.dt * 1000)
      });
    } else {
      const ex = dailyMap.get(dayKey);
      ex.min = Math.min(ex.min, item.main.temp_min);
      ex.max = Math.max(ex.max, item.main.temp_max);
    }
  }
  let days = Array.from(dailyMap.values()).sort((a, b) => a.date - b.date).slice(0, 5);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days.forEach((day, idx) => {
    let label = weekdays[day.date.getDay()];
    if (idx === 0) label = "Today";
    if (idx === 1) label = "Tomorrow";
    const icon = getWeatherIconClass(day.id);
    const minT = Math.round(day.min);
    const maxT = Math.round(day.max);
    const card = document.createElement("div");
    card.className = "daily-item";
    card.innerHTML = `<div class="day-name">${label}</div><i class="fas ${icon} daily-icon"></i><div class="daily-temps"><span>${minT}°</span><span>${maxT}°</span></div>`;
    dailyContainer.appendChild(card);
  });
  if (days.length === 0) {
    for (let i = 0; i < 5; i++) {
      const emptyCard = document.createElement("div");
      emptyCard.className = "daily-item";
      emptyCard.innerHTML = `<div>Day</div><i class="fas fa-cloud-sun"></i><div>--° --°</div>`;
      dailyContainer.appendChild(emptyCard);
    }
  }
}

async function loadForecast(lat, lon) {
  try {
    const url = `${FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      renderHourly(data);
      renderDaily(data);
    } else {
      renderHourly(null);
      renderDaily(null);
    }
  } catch (e) {
    renderHourly(null);
    renderDaily(null);
  }
}

async function loadWeatherByCity(cityName) {
  try {
    showLoading();
    let searchCity = getSearchableLocation(cityName.trim());
    let encoded = encodeURIComponent(searchCity);
    let url = `${CURRENT_URL}?q=${encoded},PH&appid=${API_KEY}&units=metric`;
    let resp = await fetch(url);
    if (!resp.ok) {
      url = `${CURRENT_URL}?q=${encoded}&appid=${API_KEY}&units=metric`;
      resp = await fetch(url);
    }
    if (!resp.ok) throw new Error(`"${cityName}" not found. Please use a valid PH city/province.`);
    const data = await resp.json();
    displayCurrentWeather(data);
    if (data.coord) await loadForecast(data.coord.lat, data.coord.lon);
    else { renderHourly(null); renderDaily(null); }
    hideLoading();
  } catch (err) {
    console.warn(err);
    alert(`${err.message}\nTry another city/province from the suggestion list.`);
    hideLoading();
    if (cityNameSpan.innerText === "--") loadWeatherByCity("Manila");
  }
}

async function loadWeatherByCoords(lat, lon) {
  try {
    showLoading();
    const url = `${CURRENT_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("Coordinates not supported");
    const data = await resp.json();
    displayCurrentWeather(data);
    await loadForecast(lat, lon);
    hideLoading();
  } catch (e) {
    console.error(e);
    alert("Could not retrieve weather from your location. Loading Manila as fallback.");
    hideLoading();
    loadWeatherByCity("Manila");
  }
}

function searchHandler() {
  const query = searchInput.value.trim();
  if (!query) {
    alert("Please enter a province, city or municipality from the Philippines list.");
    return;
  }
  loadWeatherByCity(query);
}

searchBtn.addEventListener("click", searchHandler);
searchInput.addEventListener("keypress", (e) => { if (e.key === "Enter") searchHandler(); });
geoBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => loadWeatherByCoords(pos.coords.latitude, pos.coords.longitude),
      () => { alert("Location access denied. Loading Manila instead."); loadWeatherByCity("Manila"); }
    );
  } else { loadWeatherByCity("Manila"); }
});

loadWeatherByCity("Quezon City");
