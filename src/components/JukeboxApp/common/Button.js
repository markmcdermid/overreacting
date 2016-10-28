import React, { PropTypes } from 'react';

const Button = ({ children, className, text, iconLeft, handleClick }) => (
  <button onClick={() => handleClick()} className={`${className} btn`}>
    {iconLeft && <span className="btn__icon btn__icon--left">{children}</span>}
    <span>{text}Asdf</span>
    {iconLeft || <span className="btn__icon">{children}</span>}
  </button>
);

Button.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default Button;
