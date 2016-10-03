import React from 'react';

export default ({queue}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Requested By</th>
      </tr>
      </thead>
      <tbody>
      {
        queue.map((q) => {
          return (
            <tr key={q.id}>
              <td><img src={require('../../../img/' + q.img)} alt=""/>{q.title}</td>
              <td>{q.artist}</td>
              <td>{q.requestedBy}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}
