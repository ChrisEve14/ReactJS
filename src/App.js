import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext' 
// import Animation from './components/Animation/Animation';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Welcome to Wine & Palette '/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<h1>CART</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      {/* <Animation/> */}
    </div>
  );
}

export default App;
