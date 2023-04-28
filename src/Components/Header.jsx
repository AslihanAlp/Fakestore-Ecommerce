import {useContext, useState, useEffect} from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import {BsBag} from "react-icons/bs"
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const {itemAmount} =useContext(CartContext)

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false) 
    })
  })

  return (
    <div className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full transition-all z-10`}>
      <div className='mx-auto flex items-center justify-between'>
      <Link to={"/"}>
      <div>
        <img className='w-[40px] ml-6' src={Logo} alt='logo'/>
      </div>
      </Link>
      <div onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative max-w-[50px] mr-6'>
        <BsBag className='text-2xl '/>
        <div className='bg-red-400 absolute -right-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
    </div>
    </div>
  )
}

export default Header