import React from 'react';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from 'react-scroll';
import'./Button.css';

const Button = ({ backgroundColor, label, color } ) => {
    const buttonStyle = {
        
        color: color, // You can customize the text color
        backgroundColor: backgroundColor,
    
      };
  return (
  
     <Link
      
            to="reviews"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn"
          >
           <button className='btn1' style={buttonStyle}>
           {label}
           </button>
            
          </Link>
     
    
  );
};

Button.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
   
  };
  



export default Button;