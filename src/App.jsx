import { Box, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

// Import page components
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
