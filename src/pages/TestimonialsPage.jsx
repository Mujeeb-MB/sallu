// src/pages/TestimonialsPage.jsx
import { Box, Container, Typography } from "@mui/material";

const TestimonialsPage = () => {
  return (
    <Box sx={{ pt: 12, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="primary" gutterBottom>
          Client Testimonials
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          What Our Clients Say About Us
        </Typography>
        {/* Detailed content will go here */}
      </Container>
    </Box>
  );
};

export default TestimonialsPage;
