import { useState, useEffect } from 'react'
import { getProducts } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        getProducts().then(response => {
            setProducts(response);
        }).catch(error => {
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <span className="loader"></span>
        // <h1 style={{color: "black"}}>Uploading Products...</h1>
    }


    return(
        <>
        <h1 style={{color: "black"}} >{props.greeting}</h1>
        <ItemList products={products} />
        </>

    )
}

export default ItemListContainer