import { useDispatch } from "react-redux";
import { setLoading, setUser } from "../store/userReducer";
import { getUserData } from "../utils/dbMethods";

export const useFetchUserData = () => {
  const dispatch = useDispatch();

  const fetchUserData = async (uid) => {
    dispatch(setLoading(true));
    try {
      const userData = await getUserData(uid);
      dispatch(setUser(userData));
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return fetchUserData;
};
