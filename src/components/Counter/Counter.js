import './Counter.css'
import {useState} from 'react'


const Counter = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
 
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
 
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }
 
    return(
        <div className='Counter'>          
             <div className='Controls'>
                 <button className="Cart" onClick={decrement}>-</button>
                 <h4 className='Number'>{quantity}</h4>
                 <button className="Cart" onClick={increment}>+</button>
             </div>
             <div>
                 <button className="Cart" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
             </div>
        </div>
    )
 
 }

export default Counter