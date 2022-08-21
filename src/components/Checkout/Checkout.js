import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, Timestamp, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase/index'


const Checkout = () => {
    const { cart, clearCart, total } = useContext(CartContext)

    const order = async () => {
        try{
            const orderDetail = {
                buyer: {
                    name: 'Eve',
                    phone: '1234567',
                    email: 'eve@eve.com'
                },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
            }

            addDoc(collection(db, 'orders'), orderDetail)

            const identifications = cart.map(prod => prod.id)

            const prodRef = collection(db, 'products')

            const prodAddedFire = await getDocs(query(prodRef, where(documentId(), 'in', identifications)))

            const { docs } = prodAddedFire

            const noStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const prodAdded = cart.find(prod => prod.id === doc.id)
                const prodQ = prodAdded?.quantity

                if(stockDb >= prodQ){
                    batch.update(doc.ref, {stock: stockDb - prodQ})
                } else {
                    noStock.push ({ id: doc.id, ...dataDoc})
                }
            })

            if(noStock.length === 0){
                const orderRef = collection(db, 'orders')
                const orderCreated = await addDoc(orderRef, orderDetail)
                batch.commit()
                console.log(orderCreated.id);
                clearCart()
            } else {
                console.log('Products out of stock');
            }
        } catch (error) {
            console.log(error);
        } finally {
            console.log('Item bought successfully');
        }
    }

    return (
        <div>
            <h1>Make sure you buy it before someone else does</h1>
            <form></form>
            <button className="Button" onClick={order}>Buy</button>
        </div>
    )

}

export default Checkout