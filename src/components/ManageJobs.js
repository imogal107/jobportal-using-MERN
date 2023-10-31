// import React, { useContext, useEffect, useRef, useState } from 'react'
// import JobContext from '../context/jobs/jobContext';
// // import PropTypes from 'prop-types';
// import JobItem from './JobItem';

// const ManageJobs = () => {
//     const jobContext = useContext(JobContext);
//     const { jobs, getJobsForEmployer, editJob } = jobContext;
//     useEffect(() => {
//         if(localStorage.getItem('token')){
//         getJobsForEmployer()
//         }
//         // eslint-disable-next-line
//       }, [])
//       const ref = useRef(null);
//       const refClose = useRef(null)
     
//       const [job, setJob] = useState({
//         id: "",
//         ejobTitle: "",
//         edescription: "",
//         erequirements: "",
//         econtactInformation: {
//           ename: "",
//           eemail: "",
//           ephone: "",
//         },
//         ejobLocation: "",
//         ejobCategory: "",
//       });
      
//       const contactInformation = job ? job.econtactInformation : {};
 

 

//     const updateJob = (currentJob) => {
//         ref.current.click()
//         setJob({
//             id: currentJob._id, ejobTitle: currentJob.jobTitle, edescription: currentJob.description, erequirements: currentJob.requirements, econtactInformation: {
//                 ename: currentJob.contactInformation.name, eemail: currentJob.contactInformation.email,
//                 ephone: currentJob.contactInformation.phone,
//             }, ejobLocation: currentJob.jobLocation,
//             ejobCategory: currentJob.jobCategory,
//         });

//     }
    
//     const handleClick = (e) => {
//         e.preventDefault()   
//         console.log("Button clicked. Job data:", job);
//         editJob(job.id,job.ejobTitle,job.edescription,job.erequirements,job.econtactInformation.ename,job.econtactInformation.eemail,job.econtactInformation.ephone,job.ejobLocation,job.ejobCategory)
//         refClose.current.click()
//     };
//     const onChange = (e) => {
//         console.log("Input changed:", e.target.name, e.target.value);
//         if (e.target.name.startsWith("econtactInformation.")) {
//           const contactFieldName = e.target.name.substring("econtactInformation.".length);
//           setJob({
//             ...job,
//             econtactInformation: {
//               ...job.econtactInformation,
//               [contactFieldName]: e.target.value,
//             },
//           });
//         } else {
//           setJob({ ...job, [e.target.name]: e.target.value });
//         }
//       };
      
//     return (
//         <>
//             <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#UpdateJobModal"></button>
//             <div className="modal fade" id="UpdateJobModal" tabIndex="-1" aria-labelledby="UpdateJobModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="UpdateJobModalLabel">Update Job Details</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
                          
//                                 <div className="mb-3">
//                                     <label htmlFor="ejobTitle" className="form-label">Job Title</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="ejobTitle"
//                                         name="ejobTitle"
//                                         value={job.ejobTitle}
//                                         onChange={onChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="edescription" className="form-label">Description</label>
//                                     <textarea
//                                         className="form-control"
//                                         id="edescription"
//                                         name="edescription"
//                                         value={job.edescription}
//                                         onChange={onChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="erequirements" className="form-label">Requirements</label>
//                                     <textarea
//                                         className="form-control"
//                                         id="erequirements"
//                                         name="erequirements"
//                                         value={job.erequirements}
//                                         onChange={onChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="econtactInformation.ename" className="form-label">Contact Name</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="econtactInformation.ename"
//                                         name="econtactInformation.ename"
//                                         value={job.econtactInformation.ename}
//                                         onChange={onChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="econtactInformation.eemail" className="form-label">Contact Email</label>
//                                     <input
//                                         type="email"
//                                         className="form-control"
//                                         id="econtactInformation.eemail"
//                                         name="econtactInformation.eemail"
//                                         value={job.econtactInformation.eemail}
//                                         onChange={onChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="econtactInformation.ephone" className="form-label">Contact Phone</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="econtactInformation.ephone"
//                                         name="econtactInformation.ephone"
//                                         value={job.econtactInformation.ephone}
//                                         onChange={onChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="ejobLocation" className="form-label">Job Location</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="ejobLocation"
//                                         name="ejobLocation"
//                                         value={job.ejobLocation}
//                                         onChange={onChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="ejobCategory" className="form-label">Job Category</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         id="ejobCategory"
//                                         name="ejobCategory"
//                                         value={job.ejobCategory}
//                                         onChange={onChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="modal-footer">
//                                     <button ref={refClose} type="button" className='btn btn-primary' data-bs-dismiss="modal">close</button>
//                                     <button disabled={job.ejobTitle.length < 3 || job.edescription.length < 5 || job.erequirements.length < 5 || job.econtactInformation.ename.length < 3 || job.econtactInformation.eemail.length < 8 || job.econtactInformation.ephone.length < 10 || job.ejobLocation.length < 3 || job.ejobCategory.length < 2} type="button" className="btn btn-primary" onClick={handleClick}>Update Job</button>
                                    
//                                 </div>
                        
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row my-3">
//                 <h2 style={{ color: "white" }}>Your Notes</h2>
//                 <div className="container mx-2 mt-3" style={{ color: "white", fontSize: "1.3rem" }}>{jobs.length === 0 && "No notes availabe"}</div>
//                 {jobs.map((job) => { return <JobItem updateJob={updateJob} key={job._id} job={job} /> })}
//             </div>
//         </>
//     );
// };



// export default ManageJobs;


import React, { useContext, useEffect, useRef, useState } from 'react';
import JobContext from '../context/jobs/jobContext';
import JobItem from './JobItem';

const ManageJobs = () => {
    const jobContext = useContext(JobContext);
    const { jobs, getJobsForEmployer, editJob } = jobContext;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getJobsForEmployer();
        }
        // eslint-disable-next-line
    }, []);

    const ref = useRef(null);
    const refClose = useRef(null);

    const [job, setJob] = useState({
        id: "",
        ejobTitle: "",
        edescription: "",
        erequirements: "",
        econtactInformation: { // Initialize the nested object correctly
            ename: "",
            eemail: "",
            ephone: "",
        },
        ejobLocation: "",
        ejobCategory: "",
    });

    const updateJob = (currentJob) => {
        ref.current.click();
        setJob({
            id: currentJob._id,
            ejobTitle: currentJob.jobTitle,
            edescription: currentJob.description,
            erequirements: currentJob.requirements,
            econtactInformation: {
                ename: currentJob.contactInformation.name, // Correct access to nested property
                eemail: currentJob.contactInformation.email, // Correct access to nested property
                ephone: currentJob.contactInformation.phone, // Correct access to nested property
            },
            ejobLocation: currentJob.jobLocation,
            ejobCategory: currentJob.jobCategory,
        });
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Button clicked. Job data:", job);
        editJob(
            job.id,
            job.ejobTitle,
            job.edescription,
            job.erequirements,
            job.econtactInformation.ename,
            job.econtactInformation.eemail,
            job.econtactInformation.ephone,
            job.ejobLocation,
            job.ejobCategory
        );
        refClose.current.click();
    };

    // const onChange = (e) => {
    //     console.log("Input changed:", e.target.name, e.target.value);
    //     if (e.target.name.startsWith('econtactInformation.')) {
    //         const contactFieldName = e.target.name.substring('econtactInformation.'.length);
    //         setJob({
    //             ...job,
    //             econtactInformation: {
    //                 ...job.econtactInformation,
    //                 [contactFieldName]: e.target.value,
    //             },
    //         });
    //     } else {
    //         setJob({ ...job, [e.target.name]: e.target.value });
    //     }
    // };
    const onChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value })
      }
    

    return (
        <>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#UpdateJobModal"></button>
            <div className="modal fade" id="UpdateJobModal" tabIndex="-1" aria-labelledby="UpdateJobModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="UpdateJobModalLabel">Update Job Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="ejobTitle" className="form-label">Job Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ejobTitle"
                                    name="ejobTitle"
                                    value={job.ejobTitle}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edescription" className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    id="edescription"
                                    name="edescription"
                                    value={job.edescription}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="erequirements" className="form-label">Requirements</label>
                                <textarea
                                    className="form-control"
                                    id="erequirements"
                                    name="erequirements"
                                    value={job.erequirements}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="econtactInformation.ename" className="form-label">Contact Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="econtactInformation.ename"
                                    name="econtactInformation.ename"
                                    value={job.econtactInformation.ename}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="econtactInformation.eemail" className="form-label">Contact Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="econtactInformation.eemail"
                                    name="econtactInformation.eemail"
                                    value={job.econtactInformation.eemail}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="econtactInformation.ephone" className="form-label">Contact Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="econtactInformation.ephone"
                                    name="econtactInformation.ephone"
                                    value={job.econtactInformation.ephone}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ejobLocation" className="form-label">Job Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ejobLocation"
                                    name="ejobLocation"
                                    value={job.ejobLocation}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ejobCategory" className="form-label">Job Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ejobCategory"
                                    name="ejobCategory"
                                    value={job.ejobCategory}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className='btn btn-primary' data-bs-dismiss="modal">close</button>
                                <button
                                    disabled={job.ejobTitle.length < 3 || job.edescription.length < 5 || job.erequirements.length < 5 || job.econtactInformation.ename.length < 3 || job.econtactInformation.eemail.length < 8 || job.econtactInformation.ephone.length < 10 || job.ejobLocation.length < 3 || job.ejobCategory.length < 2}
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleClick}
                                >
                                    Update Job
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2 style={{ color: "white" }}>Your Notes</h2>
                <div className="container mx-2 mt-3" style={{ color: "white", fontSize: "1.3rem" }}>{jobs.length === 0 && "No notes available"}</div>
                {jobs.map((job) => <JobItem updateJob={updateJob} key={job._id} job={job} />)}
            </div>
        </>
    );
};

export default ManageJobs;
