// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6">KLE College of Science and Commerce</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
