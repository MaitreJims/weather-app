import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import WeatherInfo from './WeatherInfo';
import { motion } from 'framer-motion';
import { IOpenWeatherDataFormatted } from '../../interfaces/WeatherDataFormatted';

export interface WeatherCardProps {
  data: IOpenWeatherDataFormatted;
}

const WeatherCard: FC<WeatherCardProps> = ({ data }) => {
  return (
    <Box
      component={motion.div}
      sx={{
        py: 2,
        px: 4,
        mt: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '1rem',
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2, auto)', md: 'repeat(4, auto)' },
        gridGap: { xs: '1rem', md: '2rem' },
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: 'easeOut',
      }}
    >
      {[
        {
          value: data.tempMax,
          units: data.tempMaxUnits,
          label: 'Max',
        },
        {
          value: data.tempMin,
          units: data.tempMinUnits,
          label: 'Min',
        },
        {
          value: data.humidity,
          units: data.humidityUnits,
          label: 'Humidité',
        },
        {
          value: data.pressure,
          units: data.pressureUnits,
          label: 'Pression',
        },
      ].map(({ value, label, units }, index) => (
        <WeatherInfo key={index} value={value} units={units} label={label} />
      ))}
    </Box>
  );
};

export default WeatherCard;
