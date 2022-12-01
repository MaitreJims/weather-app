import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { IOpenWeatherDataFormatted } from '../../interfaces/WeatherDataFormatted';

interface WeatherMainInfoProps {
  data: IOpenWeatherDataFormatted;
}

const WeatherMainInfo: FC<WeatherMainInfoProps> = ({
  data: { location, temperature, temperatureUnits: units, weather },
}) => {
  return (
    <Box
      component={motion.div}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: 'easeOut',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'regular',
          fontSize: '2rem',
        }}
      >
        {location}
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 'bold',
          mt: 1,
          mb: 1,
        }}
      >
        {`${temperature}${units}`}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'light',
          fontSize: '2rem',
          textTransform: 'capitalize',
        }}
      >
        {weather}
      </Typography>
    </Box>
  );
};

export default WeatherMainInfo;
