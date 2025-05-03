import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Stylesheets
import './style.scss'

//Unlogged in Pages
import Welcome_Page from './pages/unlogged_in/Welcome_Page.jsx';
import Login_Page from './pages/unlogged_in/Login_Page.jsx';
import Register_Page from './pages/unlogged_in/Register_Page.jsx';
import Open_An_Album from './pages/unlogged_in/Open_An_Album.jsx';

//Browser Components
import Unlogged_In_Header from './components/layouts/Unlogged_In_Header.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
      <Unlogged_In_Header/>
      <Routes>
        <Route path="/" element={<Welcome_Page />} />
        <Route path="/pages/login" element={<Login_Page/>}/>
        <Route path="/pages/register" element={<Register_Page/>}/>
        <Route path="/pages/open_an_album" element={<Open_An_Album/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
