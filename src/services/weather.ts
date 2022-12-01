import { IOpenWeatherData } from '../interfaces/OpenWeatherData';
import { IWeatherService } from '../interfaces/WeatherService';

export class OpenWeatherService implements IWeatherService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string) {
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this.apiKey = apiKey;
  }

  getWeather(
    city: string,
    lang: string = 'fr',
    units: string = 'metric'
  ): Promise<IOpenWeatherData> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&lang=${lang}&units=${units}`;
    return fetch(url)
      .then(async (response) => {
        return response.json();
      })
      .catch((e) => e);
  }
}
