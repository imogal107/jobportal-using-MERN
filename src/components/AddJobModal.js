import React, { useState, useContext , useRef} from 'react';
import JobContext from '../context/jobs/jobContext';

const AddJobModal = () => {
  const jobContext = useContext(JobContext);
  const { addJob } = jobContext;

  const [job, setJob] = useState({jobTitle: '',description: '',requirements: '',contactInformation: {name: '',email: '',phone: '',},jobLocation: '',jobCategory: '',});

  const { jobTitle, description, requirements, contactInformation, jobLocation, jobCategory } = job;
  
  const refClose = useRef(null)
  //Adding a job
  const onSubmit = (e) => {
    e.preventDefault();
    addJob(job);
    // Clear the form or handle any other actions you need.
    setJob({jobTitle: '', description: '', requirements: '',contactInformation: { name: '',
        email: '', phone: '',},jobLocation: '',jobCategory: ''});
    };

  const onChange = (e) => {
    if (e.target.name.startsWith('contactInformation.')) {
      const contactFieldName = e.target.name.substring('contactInformation.'.length);
      setJob({ ...job,contactInformation: { ...contactInformation,
          [contactFieldName]: e.target.value, },});
    } 
    else {
      setJob({...job,[e.target.name]: e.target.value, });
    }
  };
  
  return (
    <>
      <div className="modal fade" id="addJobModal" tabIndex="-1" aria-labelledby="addJobModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addJobModalLabel">Add a Job</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="jobTitle" className="form-label">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    name="jobTitle"
                    value={jobTitle}
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
                    value={description}
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
                    value={requirements}
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
                    value={contactInformation.name}
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
                    value={contactInformation.email}
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
                    value={contactInformation.phone}
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
                    value={jobLocation}
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
                    value={jobCategory}
                    onChange={onChange}
                    required
                  />
                </div>
                <button ref={refClose} type="submit" className="btn btn-primary">Add Job</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddJobModal;
