import React, { useState } from 'react';
import { TextField, Typography, Container, Button } from '@mui/material';
import { addApartment } from '../api';

const Residence = () => {
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [apartmentName, setApartmentName] = useState('');
  const [ownerIdentifier, setOwnerIdentifier] = useState('');

  const handleAddApartment = async () => {
    try {
      await addApartment(Number(apartmentNumber), apartmentName, ownerIdentifier);
      // Optionally, reset the form or fetch updated data
      setApartmentNumber('');
      setApartmentName('');
      setOwnerIdentifier('');
    } catch (error) {
      console.error("Error adding apartment:", error);
    }
  };
  
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Add Apartment
      </Typography>
      <TextField
        label="Apartment Number"
        value={apartmentNumber}
        onChange={(e) => setApartmentNumber(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Apartment Name"
        value={apartmentName}
        onChange={(e) => setApartmentName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Owner Identifier"
        value={ownerIdentifier}
        onChange={(e) => setOwnerIdentifier(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddApartment}>
        Add Apartment
      </Button>
    </Container>
  );
};

export default Residence;