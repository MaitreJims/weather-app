export interface IOpenWeatherDataFormatted {
  location: string;
  temperature: number;
  temperatureUnits: string;
  weather: string;
  humidity: number;
  humidityUnits: string;
  pressure: number;
  pressureUnits: string;
  tempMax: number;
  tempMaxUnits: string;
  tempMin: number;
  tempMinUnits: string;
  wind: number;
  windUnits: string;
}
