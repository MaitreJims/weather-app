export interface IOpenWeatherData {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
}
