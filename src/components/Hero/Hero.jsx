import { Box, Container, Typography, Button, Grid } from "@mui/material";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Lottie from "lottie-react";
import Finance from "../../assets/Finance.json";

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h1"
              color="primary"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Professional Accounting & Bookkeeping Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              paragraph
              sx={{ mb: 4 }}
            >
              Expert financial solutions for businesses in UAE. We handle your
              numbers, so you can focus on growing your business.
            </Typography>
            <Button variant="contained" size="large" sx={{ mr: 2 }}>
              Get Started
            </Button>
            <Button variant="outlined" size="large">
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {/* <AccountBalanceIcon
                sx={{
                  fontSize: "300px",
                  color: "primary.light",
                  opacity: 0.8,
                }}
              /> */}

              <Lottie animationData={Finance} loop={true} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
