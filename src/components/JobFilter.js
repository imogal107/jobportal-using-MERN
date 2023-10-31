import React from 'react';

const JobFilter = ({ selectedOption, handleOptionChange }) => {
    return (
        <>
        <div className="d-flex flex-row align-items-center justify-content-center" style={{ height: "12vh" }}>
        <i class="fa-solid fa-filter mx-2"></i>
        <h5>Filter Jobs</h5>
      </div>
      <div className='row-6' style={{ border: "1px solid rgba(197,197,197,0.5)", boxShadow: '1px 1px 2px 2px rgba(0, 0, 0, 0.2)', height: "70vh" }}>
        {/* Job category filter */}
        <div className="container" style={{ height: "12vh", width: "12vw", padding: "1px", marginBottom: "25px", marginTop: "10px" }}>
            <h6 className='mb-2'>Job Category</h6>
            <select value={selectedOption} onChange={handleOptionChange} style={{ width: "11vw", padding: "3px" }}>
                <option value="Information Technology">Information Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Education">Education</option>
                <option value="Sales">Sales</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Customer Service">Customer Service</option>
                <option value="Arts and Entertainment">Arts and Entertainment</option>
                <option value="Transportation">Transportation</option>
                {/* Add more options as needed */}
            </select>
        </div>
        <div className="container" style={{ height: "12vh", width: "12vw", padding: "1px", marginBottom: "25px" }}>
            {/* Job Location filter */}
            <h6 className='mb-2'>Job Location</h6>
            <select id="jobLocations" style={{ padding: "3px" }}>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Ratnagiri">Ratnagiri</option>
                {/* Add more location options as needed */}
            </select>
        </div>
        <div className="container" style={{ width: "12vw", padding: "10px", marginBottom: "10px" }}>
            {/* Job Type filter */}
            <h6 className='mb-2'>Job Type</h6>
            <div className="row">
                <div className="col-6 col-md-12">
                    <input type="checkbox" id="fullTime" name="jobType" value="Full Time" />
                    <label htmlFor="fullTime">Full Time</label>
                </div>
                <div className="col-6 col-md-12">
                    <input type="checkbox" id="partTime" name="jobType" value="Part Time" />
                    <label htmlFor="partTime">Part Time</label>
                </div>
                <div className="col-6 col-md-12">
                    <input type="checkbox" id="remote" name="jobType" value="Remote" />
                    <label htmlFor="remote">Remote</label>
                </div>
                <div className="col-6 col-md-12">
                    <input type="checkbox" id="freelance" name="jobType" value="Freelance" />
                    <label htmlFor="freelance">Freelance</label>
                </div>
                {/* Add more job type options as needed */}
            </div>
        </div>
    </div>
        </>
    );
};

export default JobFilter;
