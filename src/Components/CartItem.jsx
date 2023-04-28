import { Link } from "react-router-dom"
import {IoMdRemove, IoMdAdd, IoMdClose} from "react-icons/io"
import { CartContext } from "../contexts/CartContext"
import { useContext } from "react"

const CartItem = ({item}) => {
     const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)

    const {id, title,image, price, amount} = item

    
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
        <div className='w-full min-h-[150px] flex items-center gap-x-4'>
            <Link to={`/product/${id}`}>
                <img className='max-w-[80px]'  src={image} alt=""/>
            </Link>
            <div className="flex flex-col w-full">
                <div className="flex justify-between mb-2">
                <Link 
                to={`/product/${id}`}
                className="text-sm uppercase font-medium text-primary max-w-[240px] hover:underline">
                    {title}
                </Link>
                    <div className="text-xl cursor-pointer">
                    <IoMdClose onClick={() => removeFromCart(id) }className="text-gray-500 hover:text-red-500 transition"/>
                    </div>
                </div>
                <div className="flex  h-[36px] text-sm gap-x-2">
                    <div className="flex  flex-1 max-w-[100px] items-center border font-medium h-full">
                        <div onClick = {() => decreaseAmount(id)}
                        className="flex-1  flex justify-center items-center cursor-pointer">
                            <IoMdRemove />
                        </div>
                        <div className="flex h-full justify-center items-center px-2">{amount}</div>
                        <div onClick={() => increaseAmount(id)}
                        className="flex-1 h-full flex justify-center items-center cursor-pointer"><IoMdAdd /></div>
                    </div>
                    <div className="flex flex-1 items-center justify-around">$ {price}</div>
                    <div className="flex flex-1 justify-end items-center text-primary font-medium">
                        {`$ ${parseFloat(price * amount).toFixed(2)}`}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem