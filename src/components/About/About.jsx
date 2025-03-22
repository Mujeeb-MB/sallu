import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import GroupIcon from "@mui/icons-material/Group";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const features = [
  {
    icon: BusinessIcon,
    title: "Professional Excellence",
    description:
      "10+ years of experience in providing top-notch accounting services in UAE",
  },
  {
    icon: GroupIcon,
    title: "Dedicated Team",
    description:
      "Expert accountants and consultants committed to your business success",
  },
  {
    icon: EmojiObjectsIcon,
    title: "Innovative Solutions",
    description:
      "Modern accounting approaches tailored to meet your specific needs",
  },
];

const About = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" color="primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              We are a leading accounting firm in UAE, providing comprehensive
              financial services to businesses of all sizes. Our expertise spans
              across various industries, ensuring accurate and reliable
              financial management for your business.
            </Typography>
            <Typography variant="body1" paragraph>
              With our deep understanding of UAE's financial regulations and
              international accounting standards, we help businesses maintain
              compliance while optimizing their financial operations.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {features.map((feature, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateX(10px)",
                        bgcolor: "primary.light",
                        color: "white",
                      },
                    }}
                  >
                    <feature.icon sx={{ fontSize: 40 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2">
                        {feature.description}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
