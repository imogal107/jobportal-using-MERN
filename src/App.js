// import './App.css';
// import JobState from './context/jobs/jobState';
// import React, { useState } from 'react';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Contact from './components/Contact';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import EmployeeDashboard from './components/EmployeeDashboard';
// import EmployerDashboard from './components/EmployerDashboard';
// import ManageJobs from './components/ManageJobs';
// import { useEffect } from 'react';

// function App() {
//   const host = "http://localhost:5000";
//   const [alert, setAlert] = useState(null);
//   const [jobs, setJobs] = useState([]);
//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     })
//     setTimeout(() => {
//       setAlert(null)
//     }, 3000);
//   }
//    // Fetch job data from the API
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await fetch(`${host}/api/jobs/fetchjobsforemployer`); // Replace with your API endpoint
//         if (response.ok) {
//           const data = await response.json();
//           setJobs(data);
//         } else {
//           showAlert('Error fetching job data', 'error');
//         }
//       } catch (error) {
//         console.error(error);
//         showAlert('Error fetching job data', 'error');
//       }
//     };

//     fetchJobs();
//   }, []);

//   return (
//     <>
//     <JobState showAlert={showAlert}>
//     <div className="App">
   
//      <Router>
//      <Navbar/>
//      {alert && <Alert alert={alert} />}
   
//             <Routes>
//               <Route exact path='/' element={<Home />} />
//               <Route exact path="/Home" element={<Home/>} />
//               <Route exact path="/About" element={<About/> } />
//               <Route exact path="/Contact" element={<Contact/>} />
//               <Route exact path="/Login" element={<Login showAlert={showAlert}/> } />
//               <Route exact path="/SignUp" element={<SignUp showAlert={showAlert}/>} />
//               <Route exact path="/EmployeeDashboard" element={<EmployeeDashboard/>}/>
//               <Route exact path="/EmployerDashboard" element={<EmployerDashboard/>}/>
//               <Route exact path="/ManageJobs" element={<div  className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">{jobs.map((job) => (<ManageJobs key={job._id} job={job}/>))}</div>}/>
//             </Routes>

//         </Router>

//     </div>
//     </JobState>
//     </>
//   );
// }

// export default App;
import './App.css';
import JobState from './context/jobs/jobState';
import React, { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import EmployeeDashboard from './components/EmployeeDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import ManageJobs from './components/ManageJobs';

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };


  return (
    <>
      <JobState showAlert={showAlert}>
        <div className="App">
          <Router>
            <Navbar />
            {alert && <Alert alert={alert} />}
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/Login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/SignUp" element={<SignUp showAlert={showAlert} />} />
              <Route exact path="/EmployeeDashboard" element={<EmployeeDashboard />} />
              <Route exact path="/EmployerDashboard" element={<EmployerDashboard />} />
              <Route exact path="/ManageJobs" element={<ManageJobs/>} />
            </Routes>
          </Router>
        </div>
      </JobState>
    </>
  );
}

export default App;
