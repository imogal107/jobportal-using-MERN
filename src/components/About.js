import React from 'react';
import aboutbg from '../aboutbg.jpg';

const About = () => {
  const backgroundStyle = {
    backgroundImage: `url(${aboutbg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-1',
  };

  const sectionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
  };

  const teamStyle = {
    marginBottom: '20px',
  };

  return (
    <div className="about mt-5" style={backgroundStyle}>
      <div className="container text-center pt-1 mt-5" style={sectionStyle}>
        <h1 className="display-4 mt-5 mb-4">About Our Job Search and Placement Platform</h1>
        <p className="lead">
          At Career.com, we're more than just a job search platform; we're your dedicated partner in the pursuit of career goals and building successful teams. Our mission is to bridge the gap between job seekers and employers, making the hiring process seamless, efficient, and more human-centric.
        </p>
      </div>

      <div className="container my-5" style={sectionStyle}>
        <div className="d-flex flex-wrap">
          <div className="col-lg-6 col-md-12" style={teamStyle}>
            <h3 className="mb-4">Who We Are</h3>
            <p>
              At Career.com, we're more than just a job search platform; we're your dedicated partner in the pursuit of career goals and building successful teams. Our mission is to bridge the gap between job seekers and employers, making the hiring process seamless, efficient, and more human-centric.
            </p>
          </div>
          <div className="col-lg-6 col-md-12" style={teamStyle}>
            <h3 className='mb-4'>Our Team</h3>
            <p>
              We are a passionate team of professionals who understand the challenges faced by both job seekers and employers in the dynamic world of work. With years of experience in recruitment, technology, and user experience, we set out to create a platform that prioritizes the needs and aspirations of our users.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5" style={sectionStyle}>
        <div className="row">
          <div className="col-md-4">
            <h2>Our Commitment</h2>
            <p>
              We are committed to maintaining a high standard of job listings and ensuring that employers and job seekers alike have a positive experience.
            </p>
          </div>
          <div className="col-md-4">
            <h3>User-Focused</h3>
            <p>
              Our platform is designed with the user in mind, offering an intuitive interface and tools that make the process easy and effective.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Privacy and Security</h3>
            <p>
              Your data and privacy are of utmost importance to us. We use the latest security measures to protect your information.
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center my-5" style={sectionStyle}>
        <h2>Your success is our success!!</h2>
        <p>Thank you for choosing us as your partner in the journey of career advancement and talent acquisition. We look forward to helping you reach your goals.</p>
      </div>
    </div>
  );
};

export default About;
