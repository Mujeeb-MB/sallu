// src/pages/ServicesPage.jsx
import { Box, Container, Typography } from "@mui/material";

const ServicesPage = () => {
  return (
    <Box sx={{ pt: 12, pb: 6 }}>
      {" "}
      {/* Added padding top to account for header */}
      <Container maxWidth="lg">
        <Typography variant="h2" color="primary" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Comprehensive Financial Solutions for Your Business
        </Typography>
        {/* Detailed content will go here */}
      </Container>
    </Box>
  );
};

export default ServicesPage;
