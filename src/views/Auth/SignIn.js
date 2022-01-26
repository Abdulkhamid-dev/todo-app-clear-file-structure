import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BiHide, BiShow } from "react-icons/bi";
import microsoftLogo from "../../asstes/img/microsoft_logo.png";
import { StyledSignUp } from "./Auth.style";
import axios from "../../utils/axios";

function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = values;

  const [hide, setHide] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleShow = () => {
    setHide(!hide);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/local", {
        identifier: email,
        password: password,
      });
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "You successfully sign in",
        showConfirmButton: false,
        timer: 1500,
      }).then((value) => {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.jwt);
        console.log(data);
        window.location.href = "/";
      });
    } catch (error) {
      Swal.fire({
        position: "middle",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 1500,
      })
      console.log(error);
    }
  };

  return (
    <StyledSignUp>
      <div className="main">
        <div className="sign_header">
          <Link to="/started">
            <img src={microsoftLogo} alt="Logo windows" />
          </Link>
          <h2>Sign in</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="sign_body">
            <div>
              <input
                value={email}
                onChange={handleInputChange}
                required
                type="text"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="password_block">
              <input
                value={password}
                onChange={handleInputChange}
                required
                type={hide ? "password" : "text"}
                name="password"
                placeholder="Password"
              />
              <a href="#!" onClick={handleShow}>
                {hide ? <BiHide /> : <BiShow />}
              </a>
            </div>
          </div>
          <div className="sign-in__footer">
            <p>
              No account? <Link to="/sign-up">Create one!</Link>{" "}
            </p>
          </div>
          <div className="signin__actions">
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </StyledSignUp>
  );
}

export default SignIn;
