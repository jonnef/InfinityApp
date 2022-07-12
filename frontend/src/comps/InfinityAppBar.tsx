// import React from 'react';
import * as Mui from '@mui/material';
import MenuButton from './Button/MenuButton';
import { ThemeProvider } from '@mui/material/styles';
import AccountButton from './Button/AccountButton';
import defaultTheme from './Theme';

function InfinityAppBar(props: {name: String}){
  return(
    <div className="IAppBar">
      <ThemeProvider theme={defaultTheme}>
      	<Mui.AppBar position="static" color="primary">
        	<Mui.Toolbar style={{justifyContent: "space-between"}}>
          	<MenuButton />
            <Mui.Typography variant="h4">
              {props.name}
            </Mui.Typography>
            <AccountButton />
      		</Mui.Toolbar>
      	</Mui.AppBar>
      </ThemeProvider>
    </div>
  );
}

export default InfinityAppBar;