import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactInfo = ({ icon: Icon, title, content }) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
    <Icon sx={{ mr: 2, color: "primary.main" }} />
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1" color="text.secondary">
        {content}
      </Typography>
    </Box>
  </Box>
);

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" color="primary" gutterBottom>
          Contact Us
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Get in touch with our expert team
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField required fullWidth label="First Name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField required fullWidth label="Last Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth label="Email" type="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth label="Phone" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4 }}>
              <ContactInfo
                icon={LocationOnIcon}
                title="Address"
                content="123 Business Avenue, Dubai, UAE"
              />
              <ContactInfo
                icon={PhoneIcon}
                title="Phone"
                content="+971 XX XXX XXXX"
              />
              <ContactInfo
                icon={EmailIcon}
                title="Email"
                content="info@yourcompany.com"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
