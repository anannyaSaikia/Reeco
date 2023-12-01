import React from 'react'
import Navbar from './Navbar'
import ProductsTable from './ProductsTable'
import { ButtonH, ButtonL, Search, Title } from '../StyledComponents'
import { CiSearch } from "react-icons/ci";
import { FiPrinter } from "react-icons/fi";

const OrderPage = () => {
    return (
        <div>
            <Navbar />

            <div className='topper'>
                <div>Order &gt; Order32457ABC</div>
                <div className='flex justify-between'>
                    <Title>Order32457ABC</Title>
                    <div>
                        <ButtonL>Back</ButtonL>
                        <ButtonH>Approve Order</ButtonH>
                    </div>
                </div>
            </div>

            <div className='details'>
                <div>
                    <p>Supplier</p>
                    <p>East coast fruits<br /> & vegetables</p>
                </div>
                <div className='border-l border-grey-100'></div>

                <div>
                    <p>Shipping date</p>
                    <p>East coast fruits<br />& vegetables</p>
                </div>
                <div className='border-l border-grey-100'></div>

                <div>
                    <p>Total</p>
                    <p>Thu, Feb 10</p>
                </div>
                <div className='border-l border-grey-100'></div>

                <div>
                    <p>Category</p>
                    <p>Categories</p>
                </div>
                <div className='border-l border-grey-100'></div>

                <div>
                    <p>Department</p>
                    <p>300-444-678</p>
                </div>
                <div className='border-l border-grey-100'></div>

                <div>
                    <p>Status</p>
                    <p>Awaiting your<br />approval</p>
                </div>

            </div>

            <div className='container'>
                <div className='flex justify-between'>
                    <Search>
                        <p>Search...</p>
                        <CiSearch />
                    </Search>

                    <div>
                        <ButtonL>Add Item</ButtonL>
                        <FiPrinter />
                    </div>
                </div>

                <ProductsTable />
            </div>

        </div>
    )
}

export default OrderPage