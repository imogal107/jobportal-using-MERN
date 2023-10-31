import React, { useContext } from 'react';
import JobContext from '../context/jobs/jobContext';
import PropTypes from 'prop-types';

const JobItem = ({ job, updateJob }) => {
  const jobContext = useContext(JobContext);
  const {  deleteJob} = jobContext;
  

  return (
    <>
    <div className="card">
      <div className="box d-flex justify-content-evenly my-1">
        <i className="fa-solid fa-trash-can mx-2" onClick={()=>deleteJob(job._id)}></i>
        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>updateJob(job)}></i>
      </div>
      <div className="card-body">
        <p className="card-title">
          <b>Job Title: {job.jobTitle}</b>
        </p>
        <p className="card-text">
          <b>Description: </b> {job.description}
        </p>
        <p className="card-text">
          <b>Requirements: </b> {job.requirements}
        </p>
        <p className="card-text">
          <b>Contact Name: </b> {job.contactInformation.name}
        </p>
        <p className="card-text">
          <b>Contact Email: </b> {job.contactInformation.email}
        </p>
        <p className="card-text">
          <b>Contact Phone: </b> {job.contactInformation.phone}
        </p>
        <p className="card-text">
          <b>Job Location: </b> {job.jobLocation}
        </p>
        <p className="card-text">
          <b>Job Category: </b> {job.jobCategory}
        </p>
      </div>
    </div>
    
    </>
  );
};

JobItem.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobItem;
