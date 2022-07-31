import './Item.css';

const Item = ({product}) => {
    return (
        <>
            <div className='cardProduct'>
                <img  alt="Wine" className='itemImg' src={product.img}/>
                <span className='itemName' >{product.name}</span>
                <span className='itemPrice' >${product.price}</span>
            </div>
        </>
    )
}

export default Item 