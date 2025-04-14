
import Art_FSD from "./pages/art_FSD/Art_FSD";
import Artist from "./pages/artist/Artist";
import Artwork from "./pages/artwork/Artwork";
import AcrylicPainting from "./pages/acrylicPainting/AcrylicPainting";
import MandalaArt from "./pages/mandalaArt/MandalaArt";
import TavdiPainting from "./pages/tavdiPainting/TavdiPainting";
import AbstractPainting from "./pages/abstractPainting/AbstractPainting";
import CurrentEvent from "./pages/currentEvent/CurrentEvent";
import PastEvent from "./pages/pastEvent/PastEvent";
import UpcomingEvent from "./pages/upcomingEvent/UpcomingEvent";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/art_FSD' element={<Art_FSD/>}/>
      <Route path='/artist' element={<Artist/>}/>
      <Route path='/artwork' element={<Artwork/>}/>
      <Route path='/acrylicPainting' element={<AcrylicPainting/>}/>
      <Route path='/mandalaArt' element={<MandalaArt/>}/>
      <Route path='/tavdiPainting' element={<TavdiPainting/>}/>
      <Route path='/abstractPainting' element={<AbstractPainting/>}/>
      <Route path='/currentEvent' element={<CurrentEvent/>}/>
      <Route path='/pastEvent' element={<PastEvent/>}/>
      <Route path='/upcomingEvent' element={<UpcomingEvent/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
