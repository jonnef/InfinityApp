import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as Mui from '@mui/material';


function AccountButton(){

  const [open, setOpen] = useState(false);

  return( 
    <div>
      <Mui.IconButton onClick={() => setOpen(true)}><Mui.Avatar src={require("../Images/mmustermannpic.jpg")}/></Mui.IconButton>
        <Mui.Menu open={open} onClose={() => setOpen(false)} anchorOrigin={{vertical: 'top', horizontal: 'right'}} style={{textAlign: "center"}}>
          <div style={{alignContent: "center"}}>
          <Mui.CardHeader avatar={<Mui.Avatar alt="Max Mustermann" src={require("../Images/mmustermannpic.jpg")}/>} title={"Max Mustermann"}/>
          </div>
          <Mui.MenuItem href="profileeditor/"><Mui.Button href="/profileeditor">Mein Profil</Mui.Button></Mui.MenuItem>
        </Mui.Menu>
    </div>
  );
}

export default AccountButton;