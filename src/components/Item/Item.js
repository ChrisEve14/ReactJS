import './Item.css';

const Item = ({product}) => {
    return (
            <article className='cardProduct'>
                <header>
                    <h2 className='itemName'>
                        {product.name}
                    </h2>
                </header>
                <picture>
                    <img  alt="Wine" className='itemImg' src={product.img}/>
                </picture>
                <section>
                    <p className='itemPrice'>${product.price}</p>
                </section>
                <footer className='ItemFooter'>
                    {/* <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link> */}
                </footer>
            </article>
    )
}

export default Item 