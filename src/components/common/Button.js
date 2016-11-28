import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Button = ({ className, text, icon, iconLeft, handleClick, disabled }) => {
  const opts = {
    disabled,
    onClick: handleClick,
    className: classNames('btn', className)
  };
  return (
    <button {...opts} >
      {(icon && iconLeft) && <span className="btn__icon btn__icon--left">{icon}</span>}
      < span>{text}</span>
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
