
import './App.css';
import { Route, Routes } from 'react-router';
import { DashBoard } from './pages/Dashboard/Dashboard';
import { FoodDetails } from './pages/FoodDetails/foodDetails';
import  Card  from './pages/Card/Card';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';





function App() {

  return (
    <>
  <Header/>
<div className="App">
  
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/food-details" element={<FoodDetails />} />
          <Route path="/card" element={<Card />} />
        </Routes>
        

 </div>
 <Footer/>
 </>
  );
}

export default App;
