import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import ItemCount from "./components/ItemCount"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
