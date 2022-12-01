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
      <Grid container spacing={3}>
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
          <Grid key={index} item xs={6} md={3}>
            <WeatherInfo value={value} units={units} label={label} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeatherCard;
