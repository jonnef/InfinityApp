import React from 'react';
import * as Mui from '@mui/material';
import MenuButton from './Button/MenuButton';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from './Theme';

function InfinityAppBar(){
  return(
    <div className="IAppBar">
      <ThemeProvider theme={defaultTheme}>
      	<Mui.AppBar position="static" color="primary">
        	<Mui.Toolbar>
          	<MenuButton />
      		</Mui.Toolbar>
      	</Mui.AppBar>
      </ThemeProvider>
    </div>
  );
}

export default InfinityAppBar;