import React from 'react';

import { IoIosArrowDown } from 'react-icons/lib/io';

const SelectWrap = ({className, children}) => {
  return (
    <div className={className + ' select-wrap'}>
      { children }
      <span className="select-wrap__icon flex flex--center-all"><IoIosArrowDown /></span>
    </div>
  );
};

export default SelectWrap;
