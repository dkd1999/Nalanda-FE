import './App.css';
import Header from './header/Header';
import Searchbar from './components/Searchbar';
import Home from './Pages/Home';
import AddItemForm from './components/AddItemForm';
import { Route, Routes } from 'react-router-dom';
import Inventory from './Pages/Inventory';
import Addproduct from './Pages/Addproduct';
import Footer from './footer/Footer';
// import ItemDetails from './components/ItemDetails';
function App() {
  return (
    <div className="App">
      <header> <Header/> </header>
<Routes>
  <Route path='/' Component={Home}/>
  <Route path='/Inventory' Component={Inventory}/>
  <Route path='/Addproduct' Component={Addproduct}/>

</Routes>

    </div>
  );
}

export default App;
