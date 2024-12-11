import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Reside
        </Typography>
        <Button color="inherit" component={Link} to="/residence">Residence</Button>
        <Button color="inherit" component={Link} to="/apartment">Apartment</Button>
        <Button color="inherit" component={Link} to="/council">Council</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
