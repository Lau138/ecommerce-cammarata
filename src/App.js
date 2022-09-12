import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Nosotros from "./components/Nosotros"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:productosId' element={<ItemListContainer />} />
          <Route path='/item/:itemID' element={<ItemDetailContainer />} />   
          <Route path='/nosotros' element={<Nosotros />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
