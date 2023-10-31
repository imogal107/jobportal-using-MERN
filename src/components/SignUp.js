import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import loginbg from '../loginbg.jpg';
import PropTypes from 'prop-types'; 
import { useNavigate } from "react-router-dom";



const SignUp = (props) => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({ fname: "", lname: "", email: "", phone: "", password: "", confirmpassword: "", gender: "", userType: "", birthdate: "" })
    const { fname, lname, email, phone, password, confirmpassword, gender, userType, birthdate } = credentials

    const maxDate = new Date(); //

    const bgStyle = {
        backgroundImage: `url(${loginbg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };


    const handleSignUp = async (e) => {
        e.preventDefault();

        if (confirmpassword !== password) {
            props.showAlert("Password not matched", "warning");
            return; // Don't proceed further
        }

        try {

            const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fname, lname, email, phone, password, gender, userType, birthdate })
            });
            if (response.status === 400) {
                // Handle the case where the email is already used
                props.showAlert("Email is already used. Please use a different email.", "danger");
            } else if (!response.ok) {
                // Handle other non-successful responses (e.g., server error)
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const json = await response.json();
        
            if (json.success) {
                localStorage.setItem('token', json.authtoken);
                if (credentials.userType === "employee") {
                    navigate("/Login");
                    props.showAlert("Signed up as Employee", "success");
                } else if (credentials.userType === "employer") {
                    navigate('/Login');
                    props.showAlert("Signed up as Employer", "success");
                }
            } else {
                // Handle other API errors
                console.log("Error: ", json.error); // Log the error message for debugging
                props.showAlert("Email is already used. Please use a different email.", "danger");
            }
        
        } catch (error) {
            // Handle network errors or other exceptions
            console.error("Error:", error);
            props.showAlert("Network error or server issue. Please try again later.", "danger");
        }


    };
    const onChange = (e) => {
        const { name, value } = e.target;

        setCredentials({ ...credentials, [name]: value });

    }
    const handleBirthdateChange = (date) => {
        setCredentials({ ...credentials, birthdate: date });

    };
    const Cancel = () => {
        setCredentials({ fname: "", lname: "", email: "", phone: "", password: "", confirmpassword: "", gender: "", userType: "", birthdate: "" })


    }
    return (
        <div className="container" style={bgStyle}>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{ borderRadius: "25px", background: "rgba(255,255,255,0.3)" }}>
                        <div className="card-body p-md-4">
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-lg-6 col-xl-5 order-2 order-lg-1">
                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4"><b>Sign Up</b></p>
                                    <form className="mx-1 mx-md-4" onSubmit={handleSignUp}>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input
                                                    type="text"
                                                    id="fname"
                                                    name="fname"
                                                    placeholder="Enter First Name"
                                                    className="form-control"
                                                    minLength={3}
                                                    required
                                                    value={fname}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input
                                                    type="text"
                                                    id="lname"
                                                    name="lname"
                                                    placeholder="Enter Last Name"
                                                    className="form-control"
                                                    minLength={2}
                                                    required
                                                    value={lname}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                    required
                                                    value={email}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    className="form-control"
                                                    placeholder="Enter Phone no."
                                                    required
                                                    minLength={10}
                                                    maxLength={10}
                                                    value={phone}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    className="form-control"
                                                    placeholder="Enter password"
                                                    minLength={5}
                                                    required
                                                    value={password}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input
                                                    type="password"
                                                    id="confirmpassword"
                                                    name="confirmpassword"
                                                    className="form-control"
                                                    placeholder="Confirm password"
                                                    minLength={5}
                                                    required
                                                    value={confirmpassword}
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                                            <label>Gender:</label>
                                            <div className="form-check">

                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="maleGender"
                                                    value="male"
                                                    checked={gender === 'male'}
                                                    onChange={onChange}
                                                />
                                                <i className="fa-solid fa-person fa-lg me-3 fa-fw"></i>
                                            </div>
                                            <div className="form-check">

                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    id="femaleGender"
                                                    value="female"
                                                    checked={gender === 'female'}
                                                    onChange={onChange}
                                                />

                                                <i className="fa-solid fa-person-dress fa-lg me-3 fa-fw"></i>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <select
                                                id="userType"
                                                name="userType"
                                                className="form-control"
                                                required
                                                value={userType}
                                                onChange={onChange}
                                            >
                                                <option value="">Select User Type</option>

                                                <option value="employee">Employee</option>
                                                <option value="employer">Employer</option>
                                            </select>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-calendar fa-lg me-3 fa-fw"></i>
                                            <DatePicker
                                                name='birthdate'
                                                selected={birthdate}
                                                onChange={handleBirthdateChange}
                                                showYearDropdown
                                                dateFormat="MM/dd/yyyy"
                                                yearDropdownItemNumber={60}
                                                maxDate={maxDate}
                                                className="form-control"
                                                placeholderText="Select Birthdate"

                                            />
                                        </div>

                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button
                                                type="submit"
                                                className="btn btn-info btn-lg mx-2 my-2"
                                                style={{ border: "2px solid black", borderRadius: "10px", backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white' }}
                                            >
                                                Register
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-lg mx-2 my-2"
                                                style={{ border: "2px solid black", borderRadius: "10px", backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white' }}
                                                onClick={Cancel}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
SignUp.propTypes = {
    showAlert: PropTypes.func.isRequired,
};
export default SignUp;






