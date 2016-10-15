import React from 'react';

import { IoIosArrowDown } from 'react-icons/lib/io';

const SelectGroup = ({className, children}) => {
  return (
    <div className={className + ' select-group'}>
      { children }
      <span className="select-group__icon flex flex--center-all"><IoIosArrowDown /></span>
    </div>
  );
};

export default SelectGroup;
