import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert("Logged in!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserDocument(user);
      navigate("/start-page");
    } catch (err) {
      setError(err.message);
    }
  };

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate("/start-page");
    }
  }, [user, navigate]);

  const createUserDocument = async (user) => {
    if (!user) return;

    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        email: user.email,
        level: 1,
        xp: 0,
        class: 0,
        progress: {
          totalWorkouts: 0,
          completedWorkouts: 0,
          workoutHistory: {},
        },
      });
    } catch (error) {
      Alert("Ошибка при создании пользователя в Firestore:", error);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 8,
        textAlign: "center",
        p: 4,
        border: "1px solid #ccc",
        borderRadius: 4,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Вход в GymRPG
      </Typography>
      {error && (
        <Typography color="error" variant="body2" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Пароль"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSignUp}
      >
        Зарегистрироваться
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleLogin}
      >
        Войти
      </Button>
    </Box>
  );
};

export default LoginPage;
