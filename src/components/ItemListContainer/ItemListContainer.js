import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css';
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect (() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId).then(response => {
            setProducts(response);
        }).catch(error => {
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })
    }, [categoryId])

    if (loading) {
        return <span className="loader"></span>
        // <h1 style={{color: "black"}}>Uploading Products...</h1>
    }


    return(
        <>
        <h1 className="Greeting" >{greeting}</h1>
        <ItemList products={products} />

        </>

    )
}

export default ItemListContainer