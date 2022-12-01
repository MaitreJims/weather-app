import { Container } from '@mui/system';
import { useCallback } from 'react';
import CityInput from '../components/CityInput';
import useWeatherService from '../hooks/useWeatherService';
import sky from '../assets/sky.jpg';
import WeatherDetailsCard from '../components/Weather/WeatherCard';
import WeatherMainInfo from '../components/Weather/WeatherMainInfo';
import { CircularProgress, Collapse, Zoom } from '@mui/material';
import NoWeatherFound from '../components/Weather/NoWeatherFound';
import NavBar from '../components/NavBar';
import { COLORS } from '../utils/colors';

const HomePage = () => {
  const { data, error, loading, setCity } = useWeatherService();

  const onSubmit = useCallback((value: string) => {
    if (!value) return;
    setCity(value);
  }, []);

  return (
    <>
      <NavBar />
      <Container
        maxWidth={false}
        sx={{
          width: '100vw',
          height: '100vh',
          overflow: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: `url(${sky}) no-repeat center/cover`,
          zIndex: 1,
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: COLORS.grey,
            opacity: 0.3,
            zIndex: -1,
          },
        }}
      >
        <CityInput
          sx={{ borderRadius: '2rem', mb: 4 }}
          placeholder="Enter une ville"
          onSubmit={onSubmit}
          disabled={loading}
        />
        <Zoom in={loading}>
          <CircularProgress />
        </Zoom>
        <Collapse
          sx={{
            '& .MuiCollapse-wrapperInner': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
          in={!loading && !!data}
        >
          {data && (
            <>
              <WeatherMainInfo data={data} />
              <WeatherDetailsCard data={data} />
            </>
          )}
        </Collapse>
        <Collapse in={!loading && !!error}>
          <NoWeatherFound />
        </Collapse>
      </Container>
    </>
  );
};

export default HomePage;
