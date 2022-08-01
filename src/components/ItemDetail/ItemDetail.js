import './ItemDetail.css'
import Counter from '../Counter/Counter'

const ItemDetail = ({id, name, img, category, description, price, stock }) => {

    const handleOnAdd = (quantity) => {
        alert(`Items Added ${quantity}`);
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
            <Counter stock={stock} onAdd={handleOnAdd} />
        </footer>
      </article>
    )
}



export default ItemDetail