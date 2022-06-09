import React, { useState } from 'react';
import * as Mui from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

function MenuButton() {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Mui.IconButton onClick={() => setOpen(true)}><MenuIcon /></Mui.IconButton>
      Startseite
      <Mui.Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Mui.Box p={2} width="200px" textAlign="center" role="presentation" style={{ backgroundColor: "lightgrey" }}>
          <h2 style={{ color: "green" }}>Menu</h2>
          <Mui.Button>Test</Mui.Button>
        </Mui.Box>
      </Mui.Drawer>
    </div >
  );
}

export default MenuButton;