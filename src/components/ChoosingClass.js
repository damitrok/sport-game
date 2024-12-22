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
import ClassList from "../data";

const ChoosingClass = () => {
  return (
    <div>
      <Container component="main" maxWidth="lg">
        <CssBaseline />

        <Box sx={{ my: 4 }}>
          <Grid container spacing={4}>
            {/* {classList.map((class) => (
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
            )) */}
            {ClassList.map((sportClass) => (
              <div
                key={sportClass.id}
                style={{
                  textAlign: "center",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={sportClass.img}
                  alt={sportClass.nameEn}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <h3>{sportClass.nameEn}</h3>
                <p>{sportClass.nameRu}</p>
              </div>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ChoosingClass;
