import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Professional accounting and bookkeeping services in UAE, helping
              businesses manage their finances effectively.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {["Home", "Services", "About", "Contact"].map((text) => (
                <Link
                  key={text}
                  href="#"
                  color="inherit"
                  sx={{
                    mb: 1,
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map(
                (Icon, index) => (
                  <IconButton key={index} color="inherit">
                    <Icon />
                  </IconButton>
                )
              )}
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
