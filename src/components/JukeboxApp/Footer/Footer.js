import React, { PropTypes } from 'react';

import ProgressBar from './ProgressBar';

const Footer = (props) => {
  return (
    <footer className="hf hf--footer">
      <div className="hf__inner">
        <ProgressBar />
      </div>
    </footer>
  );
};

export default Footer;
