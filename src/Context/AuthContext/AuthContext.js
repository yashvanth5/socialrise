import axios from "axios";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const userToken = JSON.parse(localStorage.getItem("token"));

  const loginHandler = async (loginValues) => {
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", loginValues);
      console.log(encodedToken);

      if (status === 200) {
        localStorage.setItem(
          "token",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
      }

      //   console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  const signupHandler = async (signupValues) => {
    console.log(signupValues);
    try {
      const response = await axios.post(`/api/auth/signup`, signupValues);
      console.log(response);
      const {
        data: { createdUser, encodedToken },
      } = response;

      if (response.status === 201) {
        localStorage.setItem(
          "token",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
      }
      // console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider value={{ loginHandler, signupHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
