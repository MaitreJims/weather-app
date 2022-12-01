import { Stack, Typography } from '@mui/material';
import NoDataIllustration from '../../assets/no-data.svg';
import Image from '../Image';

const NoWeatherFound = () => {
  return (
    <Stack direction="column" sx={{ display: 'flex', alignItems: 'center' }}>
      <Image src={NoDataIllustration} width="10rem" alt="Pas de données" />
      <Typography
        variant="body2"
        sx={{
          fontWeight: 'regular',
          fontSize: '1.2rem',
          pt: 3,
        }}
      >
        Pas de données trouvées
      </Typography>
    </Stack>
  );
};

export default NoWeatherFound;
