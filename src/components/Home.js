import React from 'react';
import homebg from '../homebg.jpg';
import manwithlaptop from '../manwithlaptop.png';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${homebg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    top: '0',
    left: '0',
    zIndex: '-1',
    opacity: '1',
  };

  const sectionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
  };

  return (
    <div className="home pb-1" style={backgroundStyle}>
      <div className="container text-center mb-5 pt-5" style={sectionStyle}>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center" style={{ width: "500px", height: "500px" }}>
            <img src={manwithlaptop} style={{ width: "500px", height: "500px" }} alt="Loading..." className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-12">
            <h1 className="display-4 mb-5 mt-2">Welcome to Job Search and Hiring Platform</h1>
            <p className="lead">
              Looking for the perfect job or the ideal candidate for your company? You've come to the right place! Our job search and placement platform connects job seekers with employers in a seamless and efficient way.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5" style={sectionStyle}>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h2 className="mb-4">For Job Seekers:</h2>
            <p>
              Discover a world of opportunities tailored just for you. Browse through a diverse range of job listings, from entry-level positions to executive roles. Our intuitive search and filtering tools make finding your dream job a breeze. Upload your resume, showcase your skills, and take the next step in your career journey.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <h2 className="mb-4">For Employers:</h2>
            <p>
              Hiring the right talent is crucial for your company's success. Post job openings, review applications, and connect with qualified candidates who match your requirements. Our platform simplifies the hiring process, allowing you to focus on what matters most—growing your business.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container my-5" style={sectionStyle}>
        <div className="row">
          
        </div>
      </div> */}
      <div className="container my-5" style={sectionStyle}>
        <h2 className="mb-4">Why Choose Us:</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Extensive Job Listings</h3>
            <p>Thousands of job opportunities across various industries.</p>
          </div>
          <div className="col-md-6">
            <h3>User-Friendly Interface</h3>
            <p>Easily navigate and find what you're looking for.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>Efficient Matching</h3>
            <p>Our algorithms connect job seekers with the right employers.</p>
          </div>
          <div className="col-md-6">
            <h3>Secure and Private</h3>
            <p>Your data and privacy are our top priorities.</p>
          </div>
        </div>
      </div>

      <div className="container my-5 text-center" style={sectionStyle}>
        <h2>Your future begins here!</h2>
        <p>Join our community today and let us help you take the next step in your career or find the perfect addition to your team.</p>
      </div>
    </div>
  );
};

export default Home;
