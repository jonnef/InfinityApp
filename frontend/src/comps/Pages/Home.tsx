import { Toolbar, AppBar } from '@mui/material';
import MenuButton from '../Button/MenuButton';
import { ThemeProvider } from '@mui/material/styles';
import defaultTheme from '../Theme';

function Home(){
    return(
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

export default Home;