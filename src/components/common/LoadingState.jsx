import { Box, CircularProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";

const LoadingState = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.paper",
        zIndex: 9999,
      }}
    >
      <CircularProgress size={60} />
      <Typography
        variant="h6"
        sx={{ mt: 2 }}
        component={motion.div}
        animate={{ opacity: [0.5, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingState;
