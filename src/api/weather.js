const API_KEY = '1620215ce8142859c566c2d57d5ea95b';

export const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error('City not found');
  }
  return response.json();
};
