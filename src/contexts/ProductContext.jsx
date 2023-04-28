import axios from 'axios';
import {createContext, useState, useEffect} from 'react'


export const ProductContext = createContext();


const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
       const getProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        const data = response.data
        setProducts(data)
       }
       getProducts()
    }, [])
   
  return (
    <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider