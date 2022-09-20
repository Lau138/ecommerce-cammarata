import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Nosotros from "./components/Nosotros"
import CartContainer from "./components/CartContainer/CartContainer.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from "../src/context/CartContext.js"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:productosId' element={<ItemListContainer />} />
            <Route path='/item/:itemID' element={<ItemDetailContainer />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/cart' element={<CartContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
