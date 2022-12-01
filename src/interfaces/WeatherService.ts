import { IOpenWeatherData } from './OpenWeatherData';

export interface IWeatherService {
  getWeather(
    city: string,
    lang?: string,
    units?: string
  ): Promise<IOpenWeatherData>;
}
