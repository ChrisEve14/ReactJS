import './Item.css';

const Item = ({product}) => {
    return (
        <>
            <div className='cardProduct'>
                <img  alt="Wine" className='itemImg' src={product.img}/>
                <span className='itemName' key={product.id} >{product.name}</span>
                <span className='itemPrice' key={product.id} >${product.price}</span>
            </div>
        </>
    )
}

export default Item 