import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price }) => {
    return (
            <article className='cardProduct'>
                <header>
                    <h2 className='itemName'>
                        {name}
                    </h2>
                </header>
                <picture>
                    <img  alt="Wine" className='itemImg' src={img}/>
                </picture>
                <section>
                    <p className='itemPrice'>${price}</p>
                </section>
                <footer>
                    <Link to={`/detail/${id}`} className='Det' >More Info</Link>
                </footer>
            </article>
    )
}

export default Item 