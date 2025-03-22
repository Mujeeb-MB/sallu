import { Box } from "@mui/material";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import About from "../About/About";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <Box>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </Box>
  );
};

export default Home;
