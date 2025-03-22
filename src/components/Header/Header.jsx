import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "SERVICES", link: "/services" },
    { name: "ABOUT", link: "/about" },
    { name: "TESTIMONIALS", link: "/testimonials" },
    { name: "CONTACT", link: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0 },
    transition: { duration: 0.5 },
  };

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <motion.div initial="initial" animate="animate" variants={headerVariants}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "white",
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 1,
            }}
          >
            {/* Logo Section */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    letterSpacing: 1,
                    cursor: "pointer",
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                >
                  IRS
                </Typography>
              </motion.div>
            </Link>

            {/* Navigation Section */}
            {isMobile ? (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  alignItems: "center",
                }}
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    style={{ textDecoration: "none" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        sx={{
                          color: "primary.main",
                          position: "relative",
                          fontSize: "0.9rem",
                          fontWeight: 500,
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            width: isActive(item.link) ? "100%" : "0%",
                            height: "2px",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "primary.main",
                            transition: "width 0.3s ease-in-out",
                          },
                          "&:hover::after": {
                            width: "100%",
                          },
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                    </motion.div>
                  </Link>
                ))}
              </Box>
            )}

            {/* Mobile Drawer */}
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              PaperProps={{
                sx: {
                  width: 250,
                  bgcolor: "background.default",
                },
              }}
            >
              <List sx={{ pt: 4 }}>
                {menuItems.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={handleDrawerToggle}
                  >
                    <ListItem
                      button
                      component={motion.div}
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      sx={{
                        py: 2,
                        bgcolor: isActive(item.link)
                          ? "rgba(43, 58, 140, 0.1)"
                          : "transparent",
                      }}
                    >
                      <ListItemText
                        primary={item.name}
                        sx={{
                          "& .MuiTypography-root": {
                            fontWeight: 600,
                            color: theme.palette.primary.main,
                          },
                        }}
                      />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </motion.div>
  );
};

export default Header;
