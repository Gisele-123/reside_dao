import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { getCouncilApplications } from '../api';

const Council = () => {
  const [councilApplications, setCouncilApplications] = useState([]);

  useEffect(() => {
    const fetchCouncilApplications = async () => {
      try {
        const applications = await getCouncilApplications();
        setCouncilApplications(applications);
      } catch (error) {
        console.error("Error fetching council applications:", error);
      }
    };

    fetchCouncilApplications();
  }, []);

  return (
    <Container maxWidth="md">
      <Box my={4} component={Paper} p={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Council Applications
        </Typography>
        {councilApplications.length > 0 ? (
          councilApplications.map((application, index) => (
            <Typography key={index} variant="body1" align="center">
              Apartment Number: {application.apartmentNumber}, Role: {application.councilRole}
            </Typography>
          ))
        ) : (
          <Typography variant="body1" align="center">
            No council applications found.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Council;