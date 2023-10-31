import React from 'react';

const JobCard = ({ companyName, jobTitle, location, salary, jobType }) => {
  const cardContainerStyle = {
    marginTop: "10px",
    height: "22vh",
    border: "1px solid grey",
    boxShadow: '1px 1px 2px 2px rgba(0, 0, 0, 0.2)',
  };

  const cardTextInfoStyle = {
    height: "20vh",
    marginRight: "2px",
    marginLeft: "20px",
  };

  const btnStyle = {
    background: "rgba(197, 197, 197, 0.5)",
    border: "1px solid black",
    borderRadius: "15px",
    boxShadow: '1px 1px 2px 2px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div className="row" style={cardContainerStyle}>
      <div className="container col-2 mt-1 d-flex justify-content-center align-items-center" style={cardTextInfoStyle}>
        <h4>{companyName}</h4>
      </div>
      <div className="container col-9 mt-1" style={cardTextInfoStyle}>
        <div className="row" style={{ height: "20vh" }}>
          <div className="col-9" style={{ height: "20vh" }}>
            <h4 className='mt-2'>{jobTitle}</h4><br />
            {/* <div className="container d-flex flex-row justify-content-evenly">
              <h5><span>{location}</span></h5>
              <h5><span>{jobType}</span></h5>
            </div> */}
          </div>
          <div className="col-3" style={{ height: "20vh" }}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <button className='py-1 mt-3' type='button' name="apply" style={btnStyle}>Apply for Job</button>
              <button className='py-1 mt-3' type='button' name="apply" style={btnStyle}>Check Job Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
