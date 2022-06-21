import React from 'react';
// import SvgIcon from '@mui/material/SvgIcon';
import { Toolbar, AppBar } from '@mui/material';
import MenuButton from './comps/Button/MenuButton';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from './comps/Theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
      <AppBar color="primary">
        <Toolbar>
          <MenuButton />
        </Toolbar>
      </AppBar>
      <h1>Hallo</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
