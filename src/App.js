import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
