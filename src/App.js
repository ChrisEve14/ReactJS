import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
        <Navbar />
        <ItemListContainer show={show} setShow={setShow} greeting='Welcome to Wine & Palette '/>
        <ItemDetailContainer />
    </div>
  );
}

export default App;
