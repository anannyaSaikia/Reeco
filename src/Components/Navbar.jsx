import React from 'react'
import { Title } from '../StyledComponents'
import { BsCart } from "react-icons/bs";

const Navbar = () => {
    return (
        <>
            <nav className="flex w-full bg-green-800 text-white justify-between p-5 items-center">
                <div className="flex justify-between">
                    <Title>Reeco</Title>
                    <div className="flex">
                    <p className='mr-5 mt-2.5'>Store</p>
                    <p className='mr-5 mt-2.5'>Orders</p>
                    <p className='mr-5 mt-2.5'>Analytics</p>
                    </div>
                </div>
                <div className="flex align-center">
                    <BsCart className='mt-1'/>
                    <p className='ml-5'>Hello,James</p>
                </div>
            </nav>
        </>
    )
}

export default Navbar