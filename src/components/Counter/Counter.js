import './Counter.css'
import {useState} from 'react'

const Counter = ({onConfirm, stock, initial=1}) => {

    const [quantity, setQuantity] = useState(initial) 
 
    const increment = () => {
        quantity < stock && setQuantity(quantity + 1);
    }
 
    const decrement = () => {
        quantity > 0 && setQuantity(quantity - 1); 
    }
        
    return(
        <div className='Counter'>          
             <div className='divCounter'>
                 <button className="Cart" onClick={decrement} disabled={quantity === 0 ? true : null}>-</button>
                 <h4 className='Number'>{quantity}</h4>
                 <button className="Cart" onClick={increment} disabled={quantity === stock ? true : null}>+</button>
             </div>
             <div>
                 <button className="Cart" onClick={() => onConfirm(quantity)}  disabled={stock === 0 || quantity === 0 ? true : null}>Add to Cart</button>
             </div>
        </div>
    )
 
 }

export default Counter