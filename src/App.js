import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Skill from './Component/Skill/Skill';
import Login from './Component/Login/Login';
import Registration from './Component/Registration/Registration';
import SocialLogin from './Component/Login/SocialLogin/SocialLogin';
import RequiredAuth from './Component/RquiredAuth/RequiredAuth';
import Gallery from './Component/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      {/* <Particle></Particle> */}
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={
          <RequiredAuth>
            <About></About>
          </RequiredAuth>
        }></Route>
        <Route path='/skill' element={
          <RequiredAuth>
            <Skill></Skill>
          </RequiredAuth>
        }></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/socialLogin ' element={<SocialLogin></SocialLogin>}></Route>
        <Route path='/gallery' element={
          <RequiredAuth>
            <Gallery></Gallery>
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
