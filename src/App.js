import './App.css';
import SongViewer from './SongViewer.jsx'
import React from 'react'
function App() {
  return (
    <div id="appWrapper">
      <div id="title">
        Spotify endsong.json Viewer
      </div>
      <div id="body">
        <SongViewer />
      </div>
    </div>
  );
}

export default App;
