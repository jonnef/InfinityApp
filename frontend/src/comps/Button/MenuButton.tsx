import React, { useState } from 'react';
import * as Mui from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeButton from './HomeButton';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from '../Theme';

function MenuButton() {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
      <Mui.IconButton onClick={() => setOpen(true)}><MenuIcon /></Mui.IconButton>
      Startseite
      <Mui.Drawer PaperProps={{sx: {
        backgroundColor: 'teal'
      }}}anchor="left" open={open} onClose={() => setOpen(false)}>
        <Mui.Box p={2} width="200px" textAlign="center" role="presentation">
          <div><HomeButton /></div>
          <div><Mui.Button size="small" variant="contained" color="inherit" style={{borderColor: "seagreen"}} href="chest">Test</Mui.Button></div><br/>
          <div><Mui.Button size="small" variant="contained" color="inherit">Test</Mui.Button></div>
        </Mui.Box>
      </Mui.Drawer>
      </ThemeProvider>
    </div >
  );
}

export default MenuButton;