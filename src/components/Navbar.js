import React from 'react';
import careerlogo from '../careerlogo.png'
import { Link,useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  let navigate = useNavigate()
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    navigate("/Login")
  }
 // Check if the user is logged in
 const isLoggedIn = !!localStorage.getItem('token');
 const isLoginPath = location.pathname === '/Login';

  // Determine the user's role (employee or employer)
  const userType = localStorage.getItem('userType');
  return (
    <>

      <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{ fontSize: "1.2rem" }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={careerlogo}
              alt=""
              width="60"
              height="60"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              {userType === 'employee' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/EmployeeDashboard">
                    Employee Dashboard
                  </Link>
                </li>
              )}
              {userType === 'employer' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/EmployerDashboard">
                    Employer Dashboard
                  </Link>
                </li>
              )}
            </ul>

            {isLoggedIn && !isLoginPath ? (
              <button className="btn btn-light mx-2" style={{ textDecoration: 'none', color: 'cyan' }} onClick={handleLogout}>
                <b>Log Out</b>
              </button>
            ) : (
              !isLoginPath && (
                <form className="d-flex justify-content-center mt-2">
                  <button className="btn btn-outline-info mx-2" type="submit">
                    <Link to="/SignUp" style={{ textDecoration: 'none', color: 'cyan' }}>
                      Sign up
                    </Link>
                  </button>
                  {location.pathname !== '/Login' && (
                    <button className="btn btn-outline-info mx-2" type="submit">
                      <Link to="/Login" style={{ textDecoration: 'none', color: 'cyan' }}>
                        Login
                      </Link>
                    </button>
                  )}
                </form>
              )
            )}
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;



