import React from "react";
import { useSelector } from "react-redux";

import {
  Box,
  Typography,
  Container,
  CssBaseline,
  Grid,
  Card,
  CardContent,
} from "../utils/muiComponents";

const Home = () => {
  const user = useSelector((state) => state.user.data);
  console.log("user: ", user);
  const loading = useSelector((state) => state.user.loading);
  console.log("loading: ", loading);
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Our Website
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Discover amazing components and build your UI effortlessly using
          Material-UI!
        </Typography>

        <Grid container spacing={4}>
          <Card>
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
