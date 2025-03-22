import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Rating,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const testimonials = [
  {
    name: "John Smith",
    position: "CEO, Tech Solutions",
    comment:
      "Outstanding accounting services! They helped us streamline our financial processes and save valuable time.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    position: "Director, Trading LLC",
    comment:
      "Professional team with excellent knowledge of UAE tax regulations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    position: "Owner, Retail Chain",
    comment:
      "Their bookkeeping services are exceptional. They've been crucial in our business growth.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" color="primary" gutterBottom>
          Client Testimonials
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          What our clients say about us
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <IconButton onClick={handlePrevious}>
            <ArrowBackIcon />
          </IconButton>

          <Card
            sx={{
              maxWidth: 600,
              mx: "auto",
              textAlign: "center",
              height: "100%",
            }}
          >
            <CardContent>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 2,
                  bgcolor: "primary.main",
                }}
              >
                {testimonials[currentIndex].name[0]}
              </Avatar>
              <Typography variant="body1" paragraph>
                "{testimonials[currentIndex].comment}"
              </Typography>
              <Rating
                value={testimonials[currentIndex].rating}
                readOnly
                sx={{ mb: 2 }}
              />
              <Typography variant="h6" color="primary">
                {testimonials[currentIndex].name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {testimonials[currentIndex].position}
              </Typography>
            </CardContent>
          </Card>

          <IconButton onClick={handleNext}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
