import './ItemDetail.css'
import { useState, useContext } from 'react'
import Counter from '../Counter/Counter'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'



const ItemDetail = ({id, name, img, category, description, price, stock }) => {

    const [quantity, setQuantity] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const quantityAdded = getProductQuantity(id)

    const handleOnAdd = (quantity) => {
        console.log(`Items Added ${quantity}`);
        setQuantity(quantity)
        addItem({id, name, price, quantity})
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
                {description}
            </p>
            <p className="InfoP">
              $  {price}
            </p>
        </section>
        <footer>
            {quantity > 0 ? < Link to ='/cart' className='ItemCheck'>Check Out</Link> : <Counter stock={stock} onConfirm={handleOnAdd} initial={quantityAdded}/>}
        </footer>
      </article>
    )
}



export default ItemDetail