import React, { useState } from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { BiHide, BiShow} from "react-icons/bi";
import microsoftLogo from "../../asstes/img/microsoft_logo.png";
import { StyledSignUp } from "./Auth.style";
import axios from "../../utils/axios";

function SignUp() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [hide, setHide] = useState(true)

  const handleShow = () =>{
    setHide(!hide)
  } 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/local/register", values);
      console.log(data);
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "You have successfully registered",
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

  const { username, email, password } = values;
  return (
    <StyledSignUp>
      <div className="main">
        <div className="sign_header">
          <Link to="/started">
            <img src={microsoftLogo} alt="Logo windows" />
          </Link>
          <h2>Sign up</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="sign_body">
            <div>
              <input
                required
                onChange={handleInputChange}
                type="text"
                name="username"
                placeholder="Username"
                value={username}
              />
            </div>
            <div>
              <input
                required
                onChange={handleInputChange}
                type="text"
                name="email"
                placeholder="Email"
                value={email}
              />
            </div>
            <div className="password_block">
              <input value={password} onChange={handleInputChange} required type={hide ? 'password' : 'text'} name="password" placeholder="Password" />
              <a href="#!" onClick={handleShow}>{hide ? <BiHide/> : <BiShow/>}</a>
            </div>
          </div>
          <div className="sign-in__footer">
            <p>
              Have account? <Link to="/sign-in">Sign in now!</Link>
            </p>
          </div>
          <div className="signin__actions">
            <button>Sign up</button>
          </div>
        </form>
      </div>
    </StyledSignUp>
  );
}

export default SignUp;
