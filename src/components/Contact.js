
// import React from 'react';
// import contactbg from '../contactbg.jpg';

// const Contact = () => {
//   const backgroundStyle = {
//     backgroundImage: `url(${contactbg})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     width: '100%',
//     position: 'relative',
//     margin:"0"
//   };

//   return (
//     <div className="contact mt-5" style={backgroundStyle}>
//       <div className="container">
//         <h1 className="mb-3">Contact Us</h1>
//         <form className="p-md-5 border rounded-5 bg-body-tertiary">
//           <div className="form-floating mb-3">
//             <input type="text" id="form4Example1" className="form-control" />
//             <label className="form-label" htmlFor="form4Example1">
//               Name
//             </label>
//           </div>
//           <div className="form-floating mb-3">
//             <input type="email" id="form4Example2" className="form-control" />
//             <label className="form-label" htmlFor="form4Example2">
//               Email address
//             </label>
//           </div>
//           <div className="form-floating mb-3">
//             <textarea className="form-control" id="form4Example3" rows="4"></textarea>
//             <label className="form-label" htmlFor="form4Example3">
//               Message
//             </label>
//           </div>
//           <div className="form-check d-flex justify-content-left mb-3">
//             <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" />
//             <label className="form-check-label" htmlFor="form4Example4">
//               Send me a copy of this message
//             </label>
//           </div>
//           <button type="submit" className="w-100 btn btn-lg btn-primary">
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import contactbg from '../contactbg.jpg';

const Contact = () => {
  const backgroundStyle = {
    backgroundImage: `url(${contactbg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    margin: '0',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  const buttonStyle = {
    backgroundColor: ' #ff8c00',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div className="contact" style={backgroundStyle}>
      <div className="container">
        <h1 className="mb-3 py-5">Contact Us</h1>
        <form className="p-md-5 border rounded-5" style={formStyle}>
          <div className="form-floating mb-3">
            <input type="text" id="form4Example1" className="form-control" />
            <label style={labelStyle} htmlFor="form4Example1">
              Name
            </label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" id="form4Example2" className="form-control" />
            <label style={labelStyle} htmlFor="form4Example2">
              Email address
            </label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="form4Example3" rows="4"></textarea>
            <label style={labelStyle} htmlFor="form4Example3">
              Message
            </label>
          </div>
          <div className="form-check d-flex justify-content-left mb-3">
            <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" />
            <label className="form-check-label" htmlFor="form4Example4">
              Send me a copy of this message
            </label>
          </div>
          <button type="submit" className="w-100 btn btn-lg" style={buttonStyle}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;



