import './ItemDetail.css'
import { useState } from 'react'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'



const ItemDetail = ({id, name, img, category, description, price, stock }) => {

    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log(`Items Added ${quantity}`);
        setQuantity(quantity)
    }

    return(
      <article className="CardItem">
        <header>
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Category: {category}
            </p>
            <p className="Info">
                Description: {description}
            </p>
            <p className="Info">
                Price: {price}
            </p>
        </section>
        <footer className='ItemFooter'>
            {quantity > 0 ? < Link to ='/cart'>Check Out</Link> : <Counter stock={stock} onConfirm={handleOnAdd}/>}
            {/* <Counter stock={stock} onAdd={handleOnAdd} /> */}
        </footer>
      </article>
    )
}



export default ItemDetail