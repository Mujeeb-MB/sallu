// src/pages/ContactPage.jsx
import { Box, Container, Typography } from "@mui/material";

const ContactPage = () => {
  return (
    <Box sx={{ pt: 12, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" color="primary" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Get in Touch with Our Team
        </Typography>
        {/* Detailed content will go here */}
      </Container>
    </Box>
  );
};

export default ContactPage;
