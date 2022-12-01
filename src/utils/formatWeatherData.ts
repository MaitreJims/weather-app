import { IOpenWeatherData } from '../interfaces/OpenWeatherData';
import { IOpenWeatherDataFormatted } from '../interfaces/WeatherDataFormatted';

export const formatWeatherData = (
  data: IOpenWeatherData
): IOpenWeatherDataFormatted => {
  return {
    location: data.name,
    temperature: Math.round(data.main.temp),
    temperatureUnits: '°C',
    weather: data.weather[0].description,
    humidity: data.main.humidity,
    humidityUnits: '%',
    pressure: data.main.pressure,
    pressureUnits: 'hPa',
    tempMax: Math.round(data.main.temp_max),
    tempMaxUnits: '°C',
    tempMin: Math.round(data.main.temp_min),
    tempMinUnits: '°C',
    wind: data.wind.speed,
    windUnits: 'MPH',
  };
};
