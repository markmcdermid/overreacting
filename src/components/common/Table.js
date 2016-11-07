import React, { PropTypes } from 'react';

const Table = ({ widths, headings, children, inverse, className }) => {
  if (widths.length !== headings.length) throw new Error('Headings and Widths Must Be Same Size In Table Component');
  if ((widths.reduce((p, c) => p + c)) !== 12) throw new Error('Widths must add up to 12 In A Table Component');
  return (
    <table className={`table ${className || ''} ${inverse ? 'table--inverse' : ''}`}>
      <colgroup>
        { widths.map((w, i) => <col key={i} width={`${(100 / 12) * w}%`} />)}
      </colgroup>
      <thead>
      <tr>
        { headings.map((h, i) => <th key={i} className="table__th">{h}</th>)}
      </tr>
      </thead>
      <tbody>
      {children}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  widths: PropTypes.arrayOf(PropTypes.number).isRequired,
  headings: PropTypes.arrayOf(PropTypes.string).isRequired,
  inverse: PropTypes.bool
};

export const Td = ({ children, className }) => (
  <td className={`table__td ${className || ''}`}>{children}</td>
);

export default Table;
