import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { DashBoard } from './pages/Dashboard/Dashboard';
import { FoodDetails } from './pages/FoodDetails/foodDetails';
import { Card } from './pages/Card/Card';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<DashBoard/>}/>
      <Route path='/food-details' element={<FoodDetails/>}/>
      <Route path='/cart' element={<Card/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
