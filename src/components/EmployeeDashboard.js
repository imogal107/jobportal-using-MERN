import React, { useState } from 'react';
import officebg from '../officebg.jpg';
import JobCard from './JobCard';
import JobFilter from './JobFilter';
const EmployeeDashboard = () => {
  // CSS styling
  const con1Style = {

    height: "70vh",
    width: "100vw",

  };
  const officeBG = {
    backgroundImage: `url(${officebg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: "50% 50%",
    height: "70vh",
    imageRendering: "-webkit-optimize-contrast",
  }
  const con2Style = {
    height: "100vh",
    width: "100vw",
  };
  const mainContainerStyle = {
    width: "100vw",
    padding: "0",
  };

  const [selectedOption, setSelectedOption] = useState('Information Technology');
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const [jobList, setJobList] = useState([/* Array of job data */]);
  const [visibleJobs, setVisibleJobs] = useState(4); // Number of jobs to display at once
  const [currentPage, setCurrentPage] = useState(1); // Current page
  // Function to load more jobs
  const loadMoreJobs = () => {
    if (visibleJobs < jobList.length) {
      setVisibleJobs(visibleJobs + 4);
      setCurrentPage(currentPage + 1);
    }
  };
  // Function to go to the previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setVisibleJobs(visibleJobs - 4);
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="container-fluid" style={mainContainerStyle}>
      <div className="grid-container col-6 d-flex align-items-center justify-content-center" style={con1Style}>
        <div className="container" style={officeBG}>
          {/* contains background image called "officebg" */}
        </div>
        <div className="container d-flex align-items-center justify-content-center" style={{ background: "rgba(187, 236, 243,0.2)", height: "70vh" }}>
          <h1 style={{ fontSize: "4.5rem" }}>Get Your Job!</h1>
        </div>
      </div>
      <div className="row col-6" style={con2Style}>
        <div className="row col-2 px-3 py-3" style={{ marginLeft: "50px" }}>
          {jobList.length > 0 && (
            <JobFilter selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
          )}
        </div>
        <div className="col-9 px-3 py-3" id="scroll-container" style={{ marginLeft: "30px", height: "100vh" }}>
          <div className="column container-grid">
            {jobList.slice((currentPage - 1) * 4, visibleJobs).map((job, index) => (
              <JobCard
                key={index}
                companyName={job.companyName}
                jobTitle={job.jobTitle}
                // location={job.location}
                // salary={job.salary}
                // jobType={job.jobType}
              />
            ))}
          </div>
          <div className="pagination">
            {currentPage > 1 && (
              <button className="btn btn-primary" onClick={goToPreviousPage}>Previous</button>
            )}
            {visibleJobs < jobList.length && (
              <button className="btn btn-primary" onClick={loadMoreJobs}>Next</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;



