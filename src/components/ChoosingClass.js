import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Card,
  Typography,
  styled,
} from "../utils/muiComponents";
import ClassList from "../data";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "15px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: `0 4px 10px ${theme.palette.primary.main}`,
  },
}));

const handleCardClick = (id) => {
  console.log(`Clicked on card with id: ${id}`);
};

const ChoosingClass = () => {
  return (
    <div>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          color="theme.palette.primary.secondary"
        >
          Выберете класс для старта
        </Typography>
        <Box sx={{ my: 4 }}>
          <Grid container spacing={4}>
            {ClassList.map((sportClass) => (
              <Grid item key={sportClass.id} xs={12} sm={6} md={3}>
                <StyledCard onClick={() => handleCardClick(sportClass.id)}>
                  <Box
                    sx={{
                      height: 240,
                      position: "relative",
                      backgroundImage: `url(${sportClass.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "8px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        position: "absolute",
                        bottom: 10,
                        left: 10,
                        color: "#fff",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        padding: "5px 10px",
                        borderRadius: "4px",
                      }}
                    >
                      {sportClass.nameRu}
                    </Typography>
                  </Box>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ChoosingClass;
