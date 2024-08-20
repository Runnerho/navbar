import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import IzFood from './pages/izyFood';
import IzPay from './pages/izyPay';
import IzRent from './pages/izyRent';
import IzyProman from './pages/izyProman';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/izyFood' element={<IzFood/>}/>
        <Route path='/izyPay' element={<IzPay/>}/>
        <Route path='/izyRent' element={<IzRent/>}/>
        <Route path='/izyProman' element={<IzyProman/>}/>
      </Routes>
    </BrowserRouter>
  )
}