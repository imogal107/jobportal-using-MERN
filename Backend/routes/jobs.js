const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Job = require('../models/JobInfo'); // Assuming you have a Job model
const { body, validationResult } = require('express-validator');

// ROUTE 1: Fetch all job postings posted by a particular employer - GET "/api/jobs/fetchajobsforemployer"
router.get('/fetchjobsforemployer', fetchuser, async (req, res) => {
    try {
        const jobs = await Job.find({ user: req.user.id });
        res.json(jobs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// ROUTE 2: Fetch all job postings posted by a employeer for employees - GET "/api/jobs/fetchjobsforemployees"
router.get('/fetchjobsforemployees', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


// ROUTE 3: Add a new job posting - POST "/api/jobs/addjob"  only employer can add a job
router.post('/addjob', [
    fetchuser, // Requires authentication
    body('jobTitle', 'Job title is required').notEmpty(),
    body('description', 'Description is required').notEmpty(),
    body('requirements', 'Requirements are required').notEmpty(),
    body('contactInformation.name', 'Contact name is required').notEmpty(),
    body('contactInformation.email', 'Valid email is required').isEmail(),
    body('contactInformation.phone', 'Phone number is required').isMobilePhone(),
    body('jobLocation', 'Job location is required').notEmpty(),
    body('jobCategory', 'Job category is required').notEmpty(),
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
       
        const { jobTitle, description, requirements, contactInformation ,
            jobLocation,  jobCategory} = req.body;
        

        // Create a job posting
        const job = new Job({
            jobTitle,
            description,
            requirements,
            contactInformation,
            jobLocation, 
            jobCategory,
            user: req.user.id,
        });

        const savedJob = await job.save();
        res.json(savedJob);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


// ROUTE 4: Editing an existing job- PATCH "/api/jobs/addjob"  only employer can edit a job
router.patch('/editjob/:id', fetchuser, async (req, res) => {
    try {
        
        // Check if the job exists
        const existingJob = await Job.findById(req.params.id);

        if (!existingJob) {
            return res.status(404).json({ error: 'Job not found' });
        }

        // Check if the job belongs to the authenticated employer (req.user.id)
        if (existingJob.user.toString() !== req.user.id) {
            return res.status(401).json({ error: 'You are not authorized to edit this job' });
        }

        // Update the job details as needed
        const { jobTitle, description, requirements, contactInformation, jobLocation, 
            jobCategory } = req.body;

        const updatedJob = await Job.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            { $set: { jobTitle, description, requirements, contactInformation,jobLocation, 
                jobCategory } },
            { new: true }
        );

        res.json(updatedJob);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


// ROUTE 5: Deleting an existing job - DELETE "/api/jobs/deletejob" only employer can delete a job
router.delete('/deletejob/:id', fetchuser, async (req, res) => {
    try {
        
        // Check if the job exists
        const existingJob = await Job.findById(req.params.id);

        if (!existingJob) {
            return res.status(404).json({ error: 'Job not found' });
        }

        // Check if the job belongs to the authenticated employer (req.user.id)
        if (existingJob.user.toString() !== req.user.id) {
            return res.status(401).json({ error: 'You are not authorized to delete this job' });
        }

        // If both checks pass, you can delete the job
        await Job.deleteOne({ _id: req.params.id });
        res.json({ msg: 'Job removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;