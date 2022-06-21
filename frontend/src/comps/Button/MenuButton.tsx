import React, { useState } from 'react';
import * as Mui from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
          <div><h2 color="secondary">Menu</h2></div>
          <div><Mui.Button variant="contained" color="inherit" style={{borderColor: "seagreen"}}>Test</Mui.Button></div><br/>
          <div><Mui.Button variant="contained" color="inherit">Test</Mui.Button></div>
        </Mui.Box>
      </Mui.Drawer>
      </ThemeProvider>
    </div >
  );
}

export default MenuButton;