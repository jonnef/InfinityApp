import HomeIcon from '@mui/icons-material/Home';
import * as Mui from '@mui/material'

function HomeButton(){
  return(
    <div><Mui.IconButton href="/"><HomeIcon fontSize="large"/></Mui.IconButton></div>
  );
}

export default HomeButton;