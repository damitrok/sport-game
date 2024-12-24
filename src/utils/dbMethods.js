import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Alert } from "@mui/material";

export const getUserData = async (uid) => {
  if (!uid) return null;

  try {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const data = userDoc.data();
      if (data.createdAt && data.createdAt.toDate) {
        data.createdAt = data.createdAt.toDate().toISOString();
      }
      return data;
    } else {
      Alert("Пользователь не найден.");
      return null;
    }
  } catch (error) {
    Alert("Ошибка при получении данных пользователя:", error);
    return null;
  }
};

export const updateUserData = async (uid, updatedData) => {
  if (!uid) return;

  try {
    const userDocRef = doc(db, "users", uid);
    await updateDoc(userDocRef, {
      ...updatedData,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    Alert("Ошибка при обновлении данных пользователя:", error);
  }
};
