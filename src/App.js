import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Workouts from "./pages/Workouts";
import AddWorkout from "./pages/AddWorkout";
import StartPage from "./pages/StartPage";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <NavBar onToggleTheme={toggleTheme} />
        <Routes>
          <Route path="/start-page" element={<StartPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/add-workout" element={<AddWorkout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
