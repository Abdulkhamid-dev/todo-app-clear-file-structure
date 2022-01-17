import React, {useState} from "react";
import { Link } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import microsoftLogo from "../../asstes/img/microsoft_logo.png";
import { StyledSignUp } from "./Auth.style";
import axios from '../../utils/axios'

function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [hide, setHide] = useState(true)

  const handleInputChange = (e) => {
    const {  name, value} = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const handleShow = () =>{
    setHide(!hide)
  } 
  const handleSubmit = async (e) => {
    e.preventDefault()
  try {
    const { data } = await axios
    .post('http://localhost:1337/api/auth/local', {
      identifier: values.email,
      password: values.password,
    })
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
const {email, password} = values
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
              <input value={email} onChange={handleInputChange} required type="text" name="email" placeholder="Email" />
            </div>
            <div className="password_block">
              <input value={password} onChange={handleInputChange} required type={hide ? 'password' : 'text'} name="password" placeholder="Password" />
              <a href="#!" onClick={handleShow}>{hide ? <BiHide/> : <BiShow/>}</a>
            </div>
        </div>
        <div className="sign-in__footer">
        <p>No account? <Link to="/sign-up">Create one!</Link> </p>
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
