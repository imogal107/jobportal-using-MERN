
/* eslint-disable no-undef */

import React, { useEffect , useRef} from 'react';
import AddJobModal from './AddJobModal';
import { Link } from 'react-router-dom';

const EmployerDashboard = () => {
  // CSS styling
  const mainContainer = {
    minHeight: "86vh",
    margin: "0px",
    background: "rgba(0, 249, 226, 0.2)",
  };

  const container1 = {
    minHeight: "20vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const container2 = {
    minHeight: "50vh",
    marginTop: '2px',
  };

  const infoCard = {
    boxShadow: "2px 2px 3px 3px rgba(0, 0, 0, 0.2)",
    minHeight: "40vh",
    width: "100%",
    maxWidth: "22rem",
    margin: "5px",
    padding: "4px",
    color: "rgba(0, 39, 39, 1)",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
  };

  const btnStyle = {
    border: "2px solid black",
    borderRadius: "30px",
    padding: "3px 20px",
    backgroundColor: "rgba(0, 249, 226, 0.2)",
    margin: "5px",
    boxShadow: "1px 1px 5px 2px rgba(0, 0, 0, 0.5)",
  };
  const ref = useRef(null);
  useEffect(() => {
    // Wrap your code inside the window.onload event to ensure the DOM is fully loaded
    window.onload = () => {
      // Initialize the modal when the component mounts
      const modal = new bootstrap.Modal(document.getElementById('addJobModal'));
      const postJobButton = document.getElementById('postJobButton');

      if (postJobButton && modal) {
        postJobButton.addEventListener('click', () => {
          modal.show(); // Show the modal when the button is clicked
        });
      }
    };
  }, []);




  return (
    <>
      <AddJobModal />
      <div className="column" style={mainContainer}>
        <div className="container" style={container1}>
          <h2 style={{ color: "rgba(0, 39, 39, 1)", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Hire Employees</h2>
        </div>
        <div className="container" style={container2}>
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-lg-4" style={infoCard}>
              <p>Easily create and publish new job listings. Provide details about the job, its requirements, and more, so potential candidates can discover your opportunities.</p>
              <button ref={ref} style={btnStyle} id="postJobButton" data-bs-toggle="modal" data-bs-target="#addJobModal" >Post a Job</button>
            </div>
            <div className="col-12 col-lg-4" style={infoCard}>
              <p>Effortlessly oversee and fine-tune your job listings to align with your evolving needs. View and manage your job postings with the help of a single  click.</p>
              <button style={btnStyle}><Link to="/ManageJobs" style={{ textDecoration: 'none',color:"black" }}>
                View and Manage Jobs
              </Link></button>
            </div>
            <div className="col-12 col-lg-4" style={infoCard}>
              <p>Review applications from interested candidates. Access and manage all job applications and make the hiring process more efficient and organized.</p>
              <button style={btnStyle}>Check Job Applications</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerDashboard;
