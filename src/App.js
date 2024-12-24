import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Workouts from "./pages/Workouts";
import AddWorkout from "./pages/AddWorkout";
import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LogIn";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch } from "react-redux";
import { fetchUserData } from "./store/userReducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

const AppContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(fetchUserData(uid));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {location.pathname !== "/login" && <NavBar onToggleTheme={toggleTheme} />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/start-page"
          element={
            <ProtectedRoute>
              <StartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workouts"
          element={
            <ProtectedRoute>
              <Workouts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-workout"
          element={
            <ProtectedRoute>
              <AddWorkout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
