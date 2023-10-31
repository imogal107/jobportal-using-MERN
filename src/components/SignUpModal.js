// import React from 'react';
// import { Button, Modal } from 'react-bootstrap';


// const modalStyle = {
//   backgroundColor: '#c3ddf5', // Background color
//   color: 'black', // Text color
//   height: '250px', // Adjust the height as needed
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderLeft:"5px solid black",
//   borderRight:"5px solid black",
//   borderBottom:"5px solid black",
// };
// const btnStyle = {
//     border:"2px solid black",
//     backgroundColor:"#3e99d0",
//     color:"black"
// };
// const headerStyle = {
//     textAlign: 'center', // Center the text
//     fontSize: '2.3rem',
//     fontFamily: 'serif',
//   };

// const SignUpModal = ({ show, handleClose }) => {
//   return (
    

//     <Modal show={show} onHide={handleClose} centered >
//       <Modal.Header className='text-center' style={{backgroundColor: '#c3ddf5', 
//   color: 'black' , borderTop:"5px solid black",borderLeft:"5px solid black", borderRight:"5px solid black"}} closeButton>
//         <Modal.Title style={headerStyle}><b>Sign Up</b></Modal.Title>
//       </Modal.Header>
//       <Modal.Body style={modalStyle}>
//         <p className="text-center mb-5" ><h4><i>How do you want to sign up?</i></h4></p>
//         <div className="d-flex justify-content-evenly">
//           <Button
//             style={btnStyle}
//             className="mx-1"
//             onClick={() => {
//               handleClose();
//               // Add your sign-up logic here for Job Seeker
//             }}
//           >
//             Job Seeker
//           </Button>
//           <Button 
//           style={btnStyle}
//             className="mx-1"
//             onClick={() => {
//               handleClose();
//               // Add your sign-up logic here for Hiring Manager (Employer)
//             }}
//           >
//             Employer
//           </Button>
//         </div>
//       </Modal.Body>
//     </Modal>

//   );
// };

// export default SignUpModal;
