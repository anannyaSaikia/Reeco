import React from 'react'
import { Title } from '../StyledComponents'
import { BsCart } from "react-icons/bs";

const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    <Title>Reeco</Title>
                    <p>Store</p>
                    <p>Orders</p>
                    <p>Analytics</p>
                </div>
                <div>
                    <BsCart />
                    <p>Hello,James</p>
                </div>
            </nav>
        </>
    )
}

export default Navbar