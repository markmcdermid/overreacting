import React from 'react';

export default ({ queue }) => (
    <table className="table">
      <colgroup>
        <col width={100 / 12 * 5 + '%'} />
        <col width={100 / 12 * 4 + '%'} />
        <col width={100 / 12 * 3 + '%'} />
      </colgroup>
      <thead>
        <tr>
          <th className="table__th">Song</th>
          <th className="table__th">Artist</th>
          <th className="table__th">Requested By</th>
        </tr>
      </thead>
      <tbody>
        {
          queue.map(q => (
            <tr key={q.id}>
              <td className="table__td"><img className="table__img" alt="" src={require(`../../../img/${q.img}`)} />{q.title}</td>
              <td className="table__td">{q.artist}</td>
              <td className="table__td">{q.requestedBy || 'Add To Queue'}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
);
