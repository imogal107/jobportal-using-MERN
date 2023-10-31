import React from 'react'

const JobPosted = () => {
  return (
    <div className="col-md-3">
    <div className="card my-3">
    <div className="box d-flex justify-content-end my-1">
            <i className="fa-solid fa-trash-can mx-2"></i>
            <i className="fa-solid fa-pen-to-square mx-2"></i>
            </div>
        <div className="card-body my-2">
            <p className="card-title"><b>Category :</b></p>
            <p className="card-text"> <b>Job Type : </b> </p>
            <p className="card-text"> <b>Date : </b></p>
           
        </div>
    </div>
</div>
  )
}

export default JobPosted
