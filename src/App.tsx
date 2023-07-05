import React from 'react';
import Router from './Router';
import MusicPlayer from './components/MusicPlayer';
import MusicPlayerProvider from './utils/audio/MusicPlayerProvider';
import { BrowserRouter } from 'react-router-dom';
import DnDProvider from './components/DnDProvider';

const App = () => {
  return (
    <MusicPlayerProvider>
      <BrowserRouter>
        <Router />
        <DnDProvider>
          <MusicPlayer />
        </DnDProvider>
      </BrowserRouter>
    </MusicPlayerProvider>
  );
};

export default App;
