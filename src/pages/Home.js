import React from "react";
import {
  Box,
  Typography,
  Container,
  CssBaseline,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "../utils/muiComponents";

const Home = () => {
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
          {Array.from(Array(6)).map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt={`Card image ${index + 1}`}
                  height="140"
                  image={`https://source.unsplash.com/random?sig=${index}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Card Title {index + 1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a description of the card content. You can include
                    any relevant information here.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
