import React from 'react';

export default ({type, song, children}) => {
  console.log(children);
  const className = `SongDetails ${type ? `SongDetails--${type}` : ''}`;
  return (
    <div className={className}>
      { type === 'next' ? (<h1 className="h1 h--caps">Next</h1>) : '' }
      <img className="inline-top" alt="" src={require(`../../../img/${song.img}`)} />
      <div className="inline-top">
        <h2 className="h2">{song.title}</h2>
        <h2 className="h2">{song.artist}</h2>
        <h3 className="h3">{song.requestedBy}</h3>
      {children}
      </div>

    </div>
  );
};
