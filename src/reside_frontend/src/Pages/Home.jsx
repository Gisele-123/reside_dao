import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { getResidence } from '../api';

const Home = () => {
  const [residence, setResidence] = useState(null);

  useEffect(() => {
    const fetchResidence = async () => {
      try {
        const data = await getResidence();
        setResidence(data);
      } catch (error) {
        console.error("Error fetching residence data:", error);
      }
    };

    fetchResidence();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Reside
      </Typography>
      {residence ? (
        <>
          <Typography variant="body1" align="center">
            Residence Name: {residence.name}
          </Typography>
          <Typography variant="body1" align="center">
            Apartments Count: {residence.apartmentsCount}
          </Typography>
          <Typography variant="body1" align="center">
            Builder Identifier: {residence.builderIdentifier.toString()}
          </Typography>
          <Typography variant="body1" align="center">
            Expenses: {residence.expenses.join(', ')}
          </Typography>
        </>
      ) : (
        <Typography variant="body1" align="center">
          Loading residence data...
        </Typography>
      )}
    </Container>
  );
};

export default Home;