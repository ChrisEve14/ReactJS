import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect (() => {
        getProductById('3').then(response => {
            setProduct(response)
        })
    }, [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>

    )
}

export default ItemDetailContainer