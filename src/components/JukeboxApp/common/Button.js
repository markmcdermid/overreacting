import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = ({ className, text, icon, iconLeft, handleClick, disabled }) => {
  const opts = {
    className: classNames('btn', className),
    disabled,
    onClick: handleClick
  };
  return (
    <button {...opts} >
      {(icon && iconLeft) && <span className="btn__icon btn__icon--left">{icon}</span>}
      <span>{text}</span>
      {(icon && iconLeft) || <span className="btn__icon">{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.bool,
  icon: PropTypes.element
};

export default Button;
