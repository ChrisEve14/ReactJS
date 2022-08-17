import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
// import { getProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore"
import { db } from '../../services/firebase/index'
const ItemDetailContainer = ({ addItem }) => {
    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect (() => {

        getDoc(doc(db, 'products', productId)).then(response =>{

            const values = response.data()

            const product = { id: response.id, ...values}
            setProduct(product)
        })


        // getProductById(productId).then(response => {
        //     setProduct(response)
        // })
    }, [productId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} addItem={addItem} />
        </div>

    )
}

export default ItemDetailContainer