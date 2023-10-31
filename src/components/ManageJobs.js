import React, { useContext, useEffect, useRef, useState } from 'react'
import JobContext from '../context/jobs/jobContext';
// import PropTypes from 'prop-types';
import JobItem from './JobItem';

const ManageJobs = () => {
    const jobContext = useContext(JobContext);
    const { jobs, getJobsForEmployer, editJob } = jobContext;
    useEffect(() => {
        if(localStorage.getItem('token')){
        getJobsForEmployer()
        }
        // eslint-disable-next-line
      }, [])
      const ref = useRef(null);
      const refClose = useRef(null)
     
    const [job, setJob] = useState({ id: "", ejobTitle: '', edescription: '', erequirements: '', econtactInformation: { ename: '', eemail: '', ephone: '', }, ejobLocation: '', ejobCategory: '' })
    const contactInformation = job ? job.econtactInformation : {};

 

 

    const updateJob = (currentJob) => {
        ref.current.click()
        setJob({
            id: currentJob._id, ejobTitle: currentJob.jobTitle, edescription: currentJob.description, erequirements: currentJob.requirements, econtactInformation: {
                ename: currentJob.contactInformation.name, eemail: currentJob.contactInformation.email,
                ephone: currentJob.contactInformation.phone,
            }, ejobLocation: currentJob.jobLocation,
            ejobCategory: currentJob.jobCategory,
        });

    }
    
    const handleClick = (e) => {
        e.preventDefault()   
        console.log("Button clicked. Job data:", job);
        editJob(job.id,job.ejobTitle,job.edescription,job.erequirements,job.econtactInformation.ename,job.econtactInformation.eemail,job.econtactInformation.ephone,job.ejobLocation,job.ejobCategory)
        refClose.current.click()
    };

    const onChange = (e) => {
        console.log("Input changed:", e.target.name, e.target.value);
        if (e.target.name.startsWith('contactInformation.')) {
            const contactFieldName = e.target.name.substring('contactInformation.'.length);
            setJob({
                ...job, contactInformation: {
                    ...contactInformation,
                    [contactFieldName]: e.target.value,
                },
            });
        }
        else {
            setJob({ ...job, [e.target.name]: e.target.value, });
        }
    };
    return (
        <>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#UpdateJobModal" ></button>
            <div className="modal fade" id="UpdateJobModal" tabIndex="-1" aria-labelledby="UpdateJobModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="UpdateJobModalLabel">Update Job Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          
                                <div className="mb-3">
                                    <label htmlFor="jobTitle" className="form-label">Job Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="jobTitle"
                                        name="jobTitle"
                                        value={job.ejobTitle}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        value={job.edescription}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="requirements" className="form-label">Requirements</label>
                                    <textarea
                                        className="form-control"
                                        id="requirements"
                                        name="requirements"
                                        value={job.erequirements}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactName" className="form-label">Contact Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contactName"
                                        name="contactInformation.name"
                                        value={job.econtactInformation.ename}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactEmail" className="form-label">Contact Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="contactEmail"
                                        name="contactInformation.email"
                                        value={job.econtactInformation.eemail}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="contactPhone" className="form-label">Contact Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contactPhone"
                                        name="contactInformation.phone"
                                        value={job.econtactInformation.ephone}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="jobLocation" className="form-label">Job Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="jobLocation"
                                        name="jobLocation"
                                        value={job.ejobLocation}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="jobCategory" className="form-label">Job Category</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="jobCategory"
                                        name="jobCategory"
                                        value={job.ejobCategory}
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button disabled={job.ejobTitle.length < 3 || job.edescription.length < 5 || job.erequirements.length < 5 || job.econtactInformation.ename.length < 3 || job.econtactInformation.eemail.length < 8 || job.econtactInformation.ephone.length < 10 || job.ejobLocation.length < 3 || job.ejobCategory.length < 2} type="button" className="btn btn-primary" onClick={handleClick}>Update Job</button>

                                </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2 style={{ color: "white" }}>Your Notes</h2>
                <div className="container mx-2 mt-3" style={{ color: "white", fontSize: "1.3rem" }}>{jobs.length === 0 && "No notes availabe"}</div>
                {jobs.map((job) => { return <JobItem updateJob={updateJob} key={job._id} job={job} /> })}
            </div>
        </>
    );
};



export default ManageJobs;
