import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div id="footer">
    This website is not affiliated, associated, authorized, endorsed by, or in any way officially connected with the Spotify, or any of its subsidiaries or its affiliates. The official Spotify website can be found at <a href="http://www.spotify.com">http://www.spotify.com</a>.
    Spotify as well as related names, marks, emblems and images are registered trademarks of their respective owners.
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);