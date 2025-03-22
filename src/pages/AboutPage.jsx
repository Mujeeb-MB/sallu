// src/pages/AboutPage.jsx
import { Box, Container, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Box sx={{ pt: 12, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="primary" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your Trusted Financial Partner
        </Typography>
        {/* Detailed content will go here */}
      </Container>
    </Box>
  );
};

export default AboutPage;
