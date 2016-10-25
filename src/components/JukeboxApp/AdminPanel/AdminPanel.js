import React, { PropTypes } from 'react';

import PlaylistSwitching from './PlaylistSwitching';

const AdminPanel = (props) => (
  <section className="AdminPanel">
    <div className="component__inner">
      <h1 className="h1">Admin Panel</h1>

      <PlaylistSwitching />
      <h2 className="h2">
        Add Tracks
      </h2>
      <h2 className="h2">
        Explicit Tracks
      </h2>
      <h2 className="h2">
        Max in queue per IP
      </h2>
      <h2 className="h2">
        Volume Slider
      </h2>
      <h2 className="h2">
        Add Playlist (Category / Spotify URI / Submit)
      </h2>
      <h2 className="h2">
        Queue w/ Remove Track
      </h2>
      <h2 className="h2">
        Playlists w/ Remove Playlist
      </h2>
    </div>
  </section>
);

export default AdminPanel;
