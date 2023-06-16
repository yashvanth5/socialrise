import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

export const Signup = () => {
  const { signupHandler } = useContext(AuthContext);

  const [signupInput, setSignupInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const signupInputHandler = (e) => {
    e.preventDefault();
    setSignupInput({ ...signupInput, [e.target.name]: e.target.value });
  };
  const signupSubmitHandler = (e) => {
    e.preventDefault();
    signupHandler(signupInput);
  };

  return (
    <>
      <div>
        <h1>Social Rise</h1>
        <h2>Sign Up</h2>
        <form onSubmit={signupSubmitHandler}>
          <label htmlFor="firstName">
            First Name{" "}
            <input
              type="text"
              onChange={signupInputHandler}
              placeholder="First Name"
              name="firstName"
              value={signupInput.firstName}
            />
          </label>
          <label htmlFor="lastName">
            Last Name{" "}
            <input
              type="text"
              onChange={signupInputHandler}
              placeholder="Last Name"
              name="lastName"
              value={signupInput.lastName}
            />
          </label>
          <label htmlFor="username">
            User Name{" "}
            <input
              type="text"
              onChange={signupInputHandler}
              placeholder="username"
              name="username"
              value={signupInput.username}
            />
          </label>
          <label htmlFor="password">
            Password{" "}
            <input
              type="password"
              onChange={signupInputHandler}
              placeholder="Password"
              name="password"
              value={signupInput.password}
            />
          </label>

          <label htmlFor="password">
            Confirm Password{" "}
            <input
              type="password"
              onChange={signupInputHandler}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={signupInput.confirmPassword}
            />
          </label>
          <button type="submit">Sign up</button>

          <p>
            Already have an account ? <NavLink to="/login"> Login!</NavLink>{" "}
          </p>
        </form>
      </div>
    </>
  );
};
