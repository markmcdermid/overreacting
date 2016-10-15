import React, { PropTypes } from 'react';

const Button = ({ children, className, text, iconLeft }) => (
  <button className={`${className} btn`}>
    {iconLeft && <span className="btn__icon btn__icon--left">{children}</span>}
    <span>{text}</span>
    {iconLeft || <span className="btn__icon">{children}</span>}
  </button>
);

Button.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
