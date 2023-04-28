import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
   const [cart, setCart] = useState([])
   const [itemAmount, setItemAmount] = useState(0)
   const [total, setTotal] = useState(0)

   useEffect(() =>{
    const total = cart.reduce((acumulator, currentItem) => {
        return acumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
   })

   useEffect(() => {
    if(cart) {
        const amount = cart.reduce((accumulator, currentItem) =>{
            return accumulator + currentItem.amount
        }, 0)
        setItemAmount(amount)
    }
   }, [cart])
   
    
   const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
  
    const updatedCart = cart.map(item => item.id === id ? {...item, amount: item.amount + 1} : item)
    if(updatedCart.find(item => item.id === id)){
        setCart(updatedCart)
    } else {
        setCart([...cart, newItem])
    }
}

const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => {
        return item.id !== id
    })
    setCart(updatedCart)
}

const clearCart = () => {
    setCart([])
}

const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    addToCart(cartItem, id)
}

const decreaseAmount = (id) => {
    const cartItem = cart.find((item) =>{
        return item.id === id
    })
    if(cartItem){
        const updatedCart = cart.map(item => item.id === id ? {...item, amount:item.amount - 1} : item)
        setCart(updatedCart)
    }
    
    if(cartItem.amount < 2) {
        removeFromCart(id)
    }
}
   

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider