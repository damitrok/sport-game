import React from "react";
import ChoosingClass from "../components/ChoosingClass";
import { Box, Typography, Container } from "../utils/muiComponents";

const StartPage = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            borderBottom: "2px solid",
            borderColor: "primary.main",
            display: "inline-block",
            paddingBottom: "5px",
          }}
        >
          Добро пожаловать в GymRPG
        </Typography>
        <Typography variant="body1">
          GymRPG — это инновационное веб-приложение, созданное для того, чтобы
          вдохновить людей заниматься спортом и превратить рутину тренировок в
          увлекательное приключение. С помощью механики RPG, где за выполнение
          спортивных заданий вы получаете очки, прокачиваете своего персонажа и
          наблюдаете визуальный прогресс, приложение делает тренировочный
          процесс захватывающим и мотивирующим. Каждый пользователь может
          почувствовать себя героем собственного спортивного путешествия,
          выполняя задания, улучшая свои навыки и достигнув новых уровней как в
          игре, так и в реальной жизни.
        </Typography>
      </Box>
      <ChoosingClass />
    </Container>
  );
};

export default StartPage;
