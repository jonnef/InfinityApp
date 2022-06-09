import React, { useState } from 'react';
import * as Mui from '@mui/material';

function LeftDrawer(){

    const [open, setOpen] = useState(false);

  return(
    <div>
        <React.Fragment>
            <Mui.Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>

            </Mui.Drawer>
        </React.Fragment>    
    </div>
  );
}

export default LeftDrawer;