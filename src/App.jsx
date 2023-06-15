import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const anuncio = "ENVIO GRATIS A TODO EL PAIS"

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting = {anuncio}/>
    </div>
  );
}

export default App;
