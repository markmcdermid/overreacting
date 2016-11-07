import React, { PropTypes } from 'react';

const Modal = ({ children }) => (
  <div className="modal">
    <div className="modal__overlay" />
    <div className="modal__main"> {children}</div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
