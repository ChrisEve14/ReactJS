import Item from "../Item/Item"


const ItemList = ( { products }) => {
    return(
        
        <ul>
            {products.map( product =>(
            <Item key={product.id} product={product}/>
            ))}
        </ul>
    )
}

export default ItemList