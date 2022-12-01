import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from '../assets/logo.svg';
import Image from './Image';

const NavBar = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Toolbar variant="regular">
        <Image src={logo} alt="Logo" />
        <Typography
          variant="caption"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', md: '2rem' },
            ml: '1rem',
          }}
        >
          Météo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
