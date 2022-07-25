import {useState, useEffect } from 'react'

const Counter = ({ show, stock, initial, onAdd }) => {
    const [count, setCount] = useState(0)

    useEffect(() =>{
        console.log('function callback useEffect');

        return () => console.log('el componenete va a desmontarse');
    }, [show])

    const decrement = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    console.log('va a renderizar');
    return (
        <div>
            <p style={{color: "white" , fontSize: 50}}>{count}</p>
            <button onClick={decrement} style={{fontSize: 50}}>-</button>
            <button onClick={() => onAdd(count)} style={{fontSize: 50}}>Add to Cart</button>
            <button onClick={increment} style={{fontSize: 50}}>+</button>
        </div>
    )
}

export default Counter