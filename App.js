
import './App.css';
// import Ecom from './Components/Ecom';
// import Ecom1 from './Components/Ecom1';
// import Navbar from './Components/Navbar';
import Home from './Components/Home1';
import {Routes,Route} from 'react-router-dom';
import WomenEthnic from './Components/WomenEthnic';
import WomenWestern from './Components/WomenWestern';
import Men from './Components/Men';
import Kids from './Components/Kids';
import HomeKitchen from './Components/HomeKitchen';
import Beauty from './Components/Beauty';
import Jewellery from './Components/Jewellery';
import Bag from './Components/Bag';
import WomenStore from './Components/WomenStore';
import MenStore from './Components/MenStore';
import KidsStore from './Components/KidsStore';
import HouseDecor from './Components/HouseDecor';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/women' element={<WomenEthnic /> } />
        <Route path='/western' element={<WomenWestern /> } />
        <Route path='/men' element={<Men /> } />
        <Route path='/kids' element={<Kids /> } />
        <Route path='/hk' element={<HomeKitchen /> } />
        <Route path='/bh' element={<Beauty /> } />
        <Route path='/ja' element={<Jewellery /> } />
        <Route path='/bf' element={<Bag /> } />
        <Route path='/ks' element={<KidsStore/> } />
        <Route path='/ws' element={<WomenStore/> } />
        <Route path='/ms' element={<MenStore/> } />
        <Route path='/hd' element={<HouseDecor/> } />
      </Routes>
    </div>
  );
}

export default App;
