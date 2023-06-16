import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

export const Login = () => {
  const { loginHandler } = useContext(AuthContext);
  const guestLogin = {};

  const [loginInput, setLoginInput] = useState({ username: "", password: "" });
  console.log(loginInput);
  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginInput);
  };
  return (
    <>
      <div>
        <h1>Social Rise</h1>
        <h2>Log In</h2>
        <form onSubmit={loginSubmitHandler}>
          <label htmlFor="username">
            UserName{" "}
            <input
              type="text"
              onChange={loginInputHandler}
              name="username"
              placeholder="username"
              // autoComplete="on"
              value={loginInput.username}
            />
          </label>
          <label htmlFor="password">
            Password{" "}
            <input
              type="password"
              name="password"
              placeholder="********"
              value={loginInput.password}
              onChange={loginInputHandler}
            />
          </label>
          <button type="submit">Login</button>

          <NavLink onClick={guestLogin}>Guest Login</NavLink>
          <p>
            Don't have an account ? <NavLink to="/signup"> Sign up!</NavLink>{" "}
          </p>
        </form>
      </div>
    </>
  );
};
