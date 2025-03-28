<template>
  <div class="container">
    <h1>Weather Forecast</h1>

    <!-- Search bar -->
    <input
      v-model="cityQuery"
      type="text"
      placeholder="Enter city name"
      @input="debouncedSearch"
      class="search-box"
    />

    <!-- Temperature Unit Toggle Button -->
    <button @click="toggleTemperatureUnit" class="toggle-btn">
      Switch to {{ isCelsius ? "Fahrenheit" : "Celsius" }}
    </button>

    <!-- Dropdown for city suggestions-->
    <ul v-if="citySuggestions.length > 0">
      <li
        v-for="(city, index) in citySuggestions"
        :key="index"
        @click="selectCity(city)"
        class="dropdown-item"
      >
        {{ city.name }}, {{ city.country }}
      </li>
    </ul>


    <div v-if="weatherData">
      <h1>Weather in {{ weatherData.name }}:</h1>

      <!-- Weather Information Cards -->
      <div class="card-container">
        <div class="weather-card">
          <h2>Temperature:</h2>
          <p>
            {{
              isCelsius
                ? weatherData.main.temp.toFixed()
                : convertToFahrenheit(weatherData.main.temp).toFixed()
            }}°{{ isCelsius ? "C" : "F" }}
          </p>
        </div>

        <div class="weather-card">
          <h2>Minimum Temp:</h2>
          <p>
            {{
              isCelsius
                ? weatherData.main.temp_min.toFixed()
                : convertToFahrenheit(weatherData.main.temp_min).toFixed()
            }}°{{ isCelsius ? "C" : "F" }}
          </p>
        </div>

        <div class="weather-card">
          <h2>Maximum Temp:</h2>
          <p>
            {{
              isCelsius
                ? weatherData.main.temp_max.toFixed()
                : convertToFahrenheit(weatherData.main.temp_max).toFixed()
            }}°{{ isCelsius ? "C" : "F" }}
          </p>
        </div>

        <div class="weather-card">
          <h2>Humidity:</h2>
          <p>{{ weatherData.main.humidity }}%</p>
        </div>

        <div class="weather-card">
          <h2>Feels Like:</h2>
          <p>
            {{
              isCelsius
                ? weatherData.main.feels_like.toFixed()
                : convertToFahrenheit(weatherData.main.feels_like).toFixed()
            }}°{{ isCelsius ? "C" : "F" }}
          </p>
        </div>

        <div class="weather-card">
          <h2>Pressure:</h2>
          <p>{{ weatherData.main.pressure }} hpa</p>
        </div>

        <div class="weather-card">
          <h2>Weather:</h2>
          <p>{{ weatherData.weather[0].description }}</p>
        </div>

        <div class="weather-card">
          <h2>Wind Speed:</h2>
          <p>{{ weatherData.wind.speed }} m/sec</p>
        </div>

        <div class="weather-card">
          <h2>Visibility:</h2>
          <p>{{ weatherData.visibility / 1000 }} Km</p>
        </div>

        <div class="weather-card">
          <h2>Longitude:</h2>
          <p>{{ weatherData.coord.lon }} </p>
        </div>

        <div class="weather-card">
          <h2>Latitude:</h2>
          <p>{{ weatherData.coord.lat }} </p>
        </div>
      </div>
    </div>

    <div v-if="errorMessage" class="error-card">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

// Type for the weather data
type WeatherData = Required<{
  coord: {
    lon: number;
    lat: number;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
    feels_like: number;
  };
  weather: { description: string }[];
  wind: { speed: number };
  visibility: number;
  name: string;
}>;

type CitySuggestion = {
  name: string;   
  country: string; 
  lat: number;    
  lon: number;
  state: string;

};

const cityQuery = ref<string>("");  // To bind the search input
const weatherData = ref<WeatherData | null>(null);
const errorMessage = ref<string>("");
const isCelsius = ref<boolean>(true); 
const citySuggestions = ref<CitySuggestion[]>([]);  // Store the suggestions from API
// API Key
const apiKey: string = "b93636ba461c7294ecf793aae36a3107";

// Debounced search function to reduce frequent API calls
let previousCityQuery = ""; // To store the previous valid city query
let debounceTimer: number;
const debouncedSearch = () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    searchCities();

     // Check if the current query is different from the previous query
    if (cityQuery.value.trim() !== previousCityQuery) {
      // Clear the weather data if query changes (even by 1 letter)
      weatherData.value = null;
      previousCityQuery = cityQuery.value.trim(); // Update the previous query
    }
  }, 1000);
};

// Function to fetch city suggestions based on query
const searchCities = async () => {
  if (cityQuery.value.trim() === '') {
    citySuggestions.value = [];
    errorMessage.value = '';
    return;
  }

  try {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityQuery.value}&limit=5&appid=${apiKey}`;
    const response = await axios.get(url);
    
    console.log(response)
    if (response.data && response.data.length > 0) {
      citySuggestions.value = response.data;
      errorMessage.value = '';
    } else {
      citySuggestions.value = [];
      errorMessage.value = 'No cities found.';
    }
  } catch (error) {
    citySuggestions.value = [];
    errorMessage.value = "Error fetching city data";
  }
};


// Select city from suggestions and fetch its weather data
const selectCity = async (city: any) => {
  cityQuery.value = `${city.name}, ${city.country}`;  // Set input field with selected city
  citySuggestions.value = [];  // Clear suggestions
  await fetchWeather(city);  // Fetch weather data for the selected city
};

// Function to fetch weather data for the selected city
const fetchWeather = async (city?: any) => {
  if (!city && !cityQuery.value) {
    errorMessage.value = "Please enter a city name.";
    return;
  }

  const finalCity = city || { name: cityQuery.value };
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${finalCity.name}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data.cod !== 200) {
      errorMessage.value = "City not found.";
      return;
    }
    weatherData.value = response.data;
  } catch (error) {
    errorMessage.value = "Error fetching weather data.";
    console.error(error);
  }
};

// Toggle between Celsius and Fahrenheit
const toggleTemperatureUnit = (): void => {
  isCelsius.value = !isCelsius.value;
  localStorage.setItem(
    "temperatureUnit",
    isCelsius.value ? "Celsius" : "Fahrenheit"
  );
};

// Convert Celsius to Fahrenheit
const convertToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

// Retrieve saved temperature preference
onMounted(() => {
  const savedPreference = localStorage.getItem("temperatureUnit");
  if (savedPreference === "Fahrenheit") {
    isCelsius.value = false;
  } else {
    isCelsius.value = true;
  }
});
</script>

