import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer.js"
import ItemCount from "./components/ItemCount"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <div className='catalogo'>
        <ItemCount producto="Jordan 1 High" inicial={1} stock={5} />
        <ItemCount producto="Jordan 4 High" inicial={1} stock={3} />
        <ItemCount producto="Jordan 1 Low" inicial={1} stock={8} />
        <ItemCount producto="Jordan 5 High" inicial={1} stock={2} />
        <ItemCount producto="Nike Air Force" inicial={1} stock={16} />
      </div>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
