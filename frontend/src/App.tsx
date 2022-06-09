import React from 'react';
// import SvgIcon from '@mui/material/SvgIcon';
import { Toolbar, AppBar } from '@mui/material';
import MenuButton from './comps/MenuButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <MenuButton />
        </Toolbar>
      </AppBar>
      <h1>Hallo</h1>
    </div>
  );
}

export default App;
