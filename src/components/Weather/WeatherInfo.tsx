import { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface IWeatherInfoProps {
  value: number;
  label: string;
  units: string;
}

const WeatherInfo: FC<IWeatherInfoProps> = ({ value, units, label }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
        }}
      >
        {`${value}${units}`}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 'light',
          fontSize: '1rem',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default WeatherInfo;
