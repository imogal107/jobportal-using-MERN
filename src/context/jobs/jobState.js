// JobState.js
import React, { useState, useEffect } from "react";
import JobContext from "./jobContext";
import PropTypes from 'prop-types';

const JobState = (props) => {
    const host = "http://localhost:5000";
    const jobsInitial = [];
    const [jobs, setJobs] = useState(jobsInitial);

    // Get all jobs for employees
    const getJobsForEmployee = async () => {
        // API call to fetch job listings
        const response = await fetch(`${host}/api/jobs/fetchjobsforemployees`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            }
        });
        const json = await response.json();
        setJobs(json);
    }

     // Get jobs posted by a specific employer
     const getJobsForEmployer = async (userId) => {
        try {
            // API call to fetch job listings posted by a specific employer
            const response = await fetch(`${host}/api/jobs/fetchjobsforemployer?userId=${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token'),
                }
            });

            if (response.ok) {
                const json = await response.json();
                setJobs(json);
            } else {
                props.showAlert('Error fetching job data', 'error');
            }
        } catch (error) {
            console.error(error);
            props.showAlert('Error fetching job data', 'error');
        }
    }

    // Add a new job
    const addJob = async (jobData) => {
        // API call to add a new job listing
        const response = await fetch(`${host}/api/jobs/addjob`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            },
            body: JSON.stringify(jobData),
        });
        const job = await response.json();
        setJobs([...jobs, job]);
        props.showAlert("Job added successfully", "success");
    }

    // Edit a job
    const editJob = async (jobId, jobData) => {
        try {
            // Construct the URL with the jobId
            const url = `${host}/api/jobs/editjob/${jobId}`;
    
            // API call to update a job listing
            const response = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token'),
                },
                body: JSON.stringify(jobData),
            });
    
            if (response.ok) {
                const updatedJob = await response.json();
    
                // Update the job in the state
                const updatedJobs = jobs.map((job) => {
                    if (job._id === jobId) {
                        // Use the spread operator to merge the updated data
                        return { ...job, ...updatedJob };
                    }
                    return job;
                });
    
                setJobs(updatedJobs);
                props.showAlert("Job updated successfully", "success");
            } else {
                // Handle errors
                const errorResponse = await response.json();
                console.error(errorResponse.error);
                props.showAlert("Error updating job", "error");
            }
        } catch (error) {
            console.error(error);
            props.showAlert('Error updating job', 'error');
        }
    }
    
    

    // Delete a job
    const deleteJob = async (jobId) => {
        // API call to delete a job listing
        const response = await fetch(`${host}/api/jobs/deletejob/${jobId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token'),
            }
        });
        const json = await response.json();
        const newJobs = jobs.filter((job) => job._id !== jobId);
        setJobs(newJobs);
        props.showAlert("Job deleted successfully", "success");
    }

    useEffect(() => {
        getJobsForEmployer();
    }, []); // Run once on component mount

    return (
        <JobContext.Provider value={{ jobs, addJob, deleteJob, getJobsForEmployee, getJobsForEmployer, editJob }}>
            {props.children}
        </JobContext.Provider>
    );
}

JobState.propTypes = {
    showAlert: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default JobState;
