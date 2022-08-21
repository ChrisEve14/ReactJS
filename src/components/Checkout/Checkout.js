import { useContext } from "react"
import { useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, Timestamp, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import Swal from 'sweetalert2'


const Checkout = () => {
    const [purchased, setPurchased] = useState(0)
    const { cart, clearCart, total } = useContext(CartContext)
    const [orderN, setOrderN] = useState("")
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [mail, setMail] = useState("");

    if (purchased === 1){
        return(  
            <div>
                <h1>Thanks for shopping with us, {name}!</h1>
                <h2>Your order number is: #{orderN}</h2>
            </div>)
    }
    
    const order = async () => {
        try{
            const orderDetail = {
                buyer: {
                    name: name,
                    phone: phone,
                    email: mail,
                },
                items: cart,
                total: `${total}`,
                date: Timestamp.fromDate(new Date())
            }

            console.log(orderDetail);

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

                console.log(prodAdded);
                console.log(prodQ);

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
                setOrderN(orderCreated.id)
                setPurchased(1)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Something went wrong!',
                    text: 'One of the items you are trying to buy is out of stock',
                  })
            }
        } catch (error) {
            console.log(error);
            }
    }

    return (
        <div>
            <h1>Make sure you buy it before someone else does</h1>
            <form>
                <label>Name:
                <input 
                    type="text" 
                    onChange={(e) => {setName(e.target.value);}}
                />
                </label>
                <label>Email:
                <input 
                    type="text"  
                    onChange={(e) => {setMail(e.target.value);}}
                />
                </label>
                <label>Phone:
                    <input 
                    type="number" 
                    onChange={(e) => {setPhone(e.target.value);}}
                    />
                    </label>
            </form>
            <button type="submit" className="Button" onClick={order}>Buy</button>
        </div>
    )

}

export default Checkout