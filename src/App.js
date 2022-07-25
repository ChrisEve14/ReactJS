import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    alert(`Items Added ${quantity}`);
  }
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer show={show} setShow={setShow} greeting='Welcome to Wine & Palette '/>
        <Counter show={show} stock={10} initial={1} onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;
