import React from 'react'
import PropTypes from 'prop-types';


const Alert = (props) => {
    const Capitalize = (word) => {
      if (word === "danger") {
        word = "error";
      }
      if (typeof word === "string" && word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return '';
    };
  
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 999, // Ensure it's displayed on top
          width: '100%',
        }}
      >
        {props.alert && (
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show `}
            role="alert"
          >
            <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )}
      </div>
    );
  };
  
  Alert.propTypes = {
    alert: PropTypes.shape({
      type: PropTypes.string.isRequired,
      msg: PropTypes.string.isRequired,
    }),
  };
  
  export default Alert;
  