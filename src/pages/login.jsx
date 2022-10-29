import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({handleAuth}) => {
  const [formValue, setFormValue] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleLogIn = () => {
    const { username, password } = formValue;

    if (username === "root@domain.com" && password === "12345678") {
      localStorage.setItem("isAuth", String(true));
      navigate("/main");
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValue((prevFormValue) => {

      return {
        ...prevFormValue,
        [name]: value
      }
    });
  }

  return (
    <>
      <div className="login-page--content">
        <h1 className="login-page--headear">Login</h1>
        <div className="form">
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button onClick={handleLogIn}>Log in</button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;