import React from 'react';
import Home from './Pages/Home';
import Chest from './Pages/Chest';
import ProfileEditor from './Pages/ProfileEditor';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function Routing(){
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
          <Route path="chest/" element={<Chest/>}/>
          <Route path="profileeditor/" element={<ProfileEditor/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;