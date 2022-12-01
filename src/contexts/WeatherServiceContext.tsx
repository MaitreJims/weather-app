import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { IOpenWeatherDataFormatted } from '../interfaces/WeatherDataFormatted';
import { OpenWeatherService } from '../services/weather';
import { formatWeatherData } from '../utils/formatWeatherData';
const { VITE_OPENWEATHER_API_KEY: apiKey } = import.meta.env;

export interface WeatherServiceContextValue {
  loading: boolean;
  data: IOpenWeatherDataFormatted | null;
  error: Error | null;
  setCity: (city: string) => void;
}

const weatherServiceContext = createContext<WeatherServiceContextValue>({
  loading: false,
  data: null,
  error: null,
  setCity: () => {},
});

export const WeatherServiceProvider: FC<PropsWithChildren> = ({ children }) => {
  if (!apiKey) {
    throw new Error('Missing VITE_OPENWEATHER_API_KEY');
  }

  const service = useMemo(() => new OpenWeatherService(apiKey), []);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IOpenWeatherDataFormatted | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const setCity = useCallback<(city: string) => void>((city) => {
    setData(null);
    setLoading(true);
    service
      .getWeather(city)
      .then((weather) => {
        const weatherDataFormatted = formatWeatherData(weather);
        setData(weatherDataFormatted);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setData(null);
        setLoading(false);
        setError(error as Error);
      });
  }, []);

  return (
    <weatherServiceContext.Provider
      value={{
        loading,
        data,
        error,
        setCity,
      }}
    >
      {children}
    </weatherServiceContext.Provider>
  );
};

export default weatherServiceContext;
