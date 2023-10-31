import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import loginbg from '../loginbg.jpg';
import PropTypes from 'prop-types'; 
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  //CSS Styling 
  const bgStyle = {
    backgroundImage: `url(${loginbg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  };

  const formStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '2rem',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  };

  const headerStyle = {
    letterSpacing: '2px',
    textAlign: 'center',
    fontFamily: 'cursive',
    fontSize: '2rem',
  };

  const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const iconStyle = {
    flex: '0 0 20px',
  };

  const inputStyle = {
    flex: '1',
  };

  const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  //Functions and Working
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      localStorage.setItem('userType', json.userType); 
      props.showAlert("Login Successful", "success");

      // Check the userType and navigate accordingly
      if (json.userType === "employee") {
        navigate("/EmployeeDashboard");
      } else if (json.userType === "employer") {
        navigate("/EmployerDashboard");
      }
    } else {
      props.showAlert("Login Failed", "danger");
    }
  };
const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value });
}
const Cancel = () => {
    setCredentials({ email: "", password: "" })

}



  return (
    <div className="text-black d-flex" style={bgStyle}>
      <div className="d-flex align-items-center">
        <form onSubmit={handleLogin} style={formStyle}>
          <h3 className="fw-normal mx-3 my-3 pb-3" style={headerStyle}>
            <b>Login</b>
          </h3>

          <div style={inputGroupStyle}>
            <div style={iconStyle}>
              <i className="fas fa-envelope fa-lg fa-fw"></i>
            </div>
            <div style={inputStyle}>
              <input type="email" id="email" name="email" className="form-control form-control-lg" placeholder="Enter your email"  onChange={onChange}/>
            </div>
          </div>

          <div style={inputGroupStyle}>
            <div style={iconStyle}>
              <i className="fas fa-lock fa-lg fa-fw"></i>
            </div>
            <div style={inputStyle}>
              <input type="password" id="password" name="password" className="form-control form-control-lg" placeholder="Enter Password" onChange={onChange}/>
            </div>
          </div>

          <div style={buttonGroupStyle}>
            <button className="btn btn-info btn-lg mx-2" type="submit" style={{ border: "2px solid black", borderRadius: "10px", backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white' }}>
              Login
            </button>
            <button className="btn btn-info btn-lg mx-2" type="button" style={{ border: "2px solid black", borderRadius: "10px", backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white' }} onClick={Cancel}>
              Cancel
            </button>
          </div>

          <div className="container d-block" style={{ textAlign: "center" }}>
            <p style={{ fontFamily: 'cursive', fontSize: '1.2rem' }}>
              Don't have an account? <Link to="/Signup" className="link-info">Register here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
Login.propTypes = {
  showAlert: PropTypes.func.isRequired,
};
export default Login;
