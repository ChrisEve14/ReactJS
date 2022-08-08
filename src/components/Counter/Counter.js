import './Counter.css'
import {useState} from 'react'

const Counter = ({onConfirm, stock, initial= 1}) => {
    
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
                 <button className="Cart" onClick={() => onConfirm(quantity)}>Add to Cart</button>
             </div>
        </div>
    )
 
 }

export default Counter