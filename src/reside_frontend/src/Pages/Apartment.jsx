import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { getApartments } from '../api'; 

const Apartment = () => {
  const [apartments, setApartments] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const data = await getApartments(); 
        setApartments(data); 
      } catch (error) {
        console.error("Error fetching apartments:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchApartments();
  }, []);

  return (
    <Container maxWidth="md">
      <Box my={4} component={Paper} p={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Apartment List
        </Typography>
        {loading ? (
          <Typography variant="body1" align="center">
            Loading apartments...
          </Typography>
        ) : apartments.length > 0 ? ( 
          apartments.map((apartment) => (
            <Box key={apartment.number} mb={2}>
              <Typography variant="body1" align="center">
                Number: {apartment.number}
              </Typography>
              <Typography variant="body1" align="center">
                Name: {apartment.name}
              </Typography>
              <Typography variant="body1" align="center">
                Owner Identifier: {apartment.ownerIdentifier}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="body1" align="center">
            No apartments found.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Apartment;