import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css';
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from '../../services/firebase/index'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect (() => {

        const collectionReference = !categoryId 
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(collectionReference).then(response =>{
            const products = response.docs.map(doc => {
                const values = doc.data()
                return {id: doc.id, ...values}
            })
            
            setProducts(products);
        }).catch(error => {
            console.log(error);
        }).finally(()=>{
            setLoading(false)
        })
    }, [categoryId])

    useEffect(() => {
        const onResize = () => console.log('cambio el tamaño de ventana')

        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    }, [])
    

    if (loading) {
        return <span className="loader"></span>
    }


    return(
        <>
        <h1 className="Greeting" >{greeting}</h1>
        <ItemList products={products} />

        </>

    )
}

export default ItemListContainer