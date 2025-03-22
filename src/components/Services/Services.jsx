import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const services = [
  {
    title: "Accounting Services",
    description:
      "Complete accounting solutions including financial statements, bank reconciliation, and more.",
    icon: AccountBalanceWalletIcon,
  },
  {
    title: "Bookkeeping Services",
    description:
      "Accurate recording of daily transactions, maintaining ledgers, and financial record-keeping.",
    icon: ReceiptIcon,
  },
  {
    title: "VAT Services",
    description:
      "VAT registration, filing returns, and ensuring compliance with UAE VAT regulations.",
    icon: AssessmentIcon,
  },
  {
    title: "Financial Consulting",
    description:
      "Expert financial advice to help your business grow and maximize profitability.",
    icon: AttachMoneyIcon,
  },
];

const Services = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="primary"
          gutterBottom
        >
          Our Services
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Comprehensive financial solutions tailored to your business needs
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardActionArea>
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <service.icon
                      sx={{
                        fontSize: 60,
                        color: "primary.main",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      align="center"
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      align="center"
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
