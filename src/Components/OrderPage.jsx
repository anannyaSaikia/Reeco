import React, { useEffect } from 'react'
import Navbar from './Navbar'
import ProductsTable from './ProductsTable'
import { ButtonH, ButtonL, Search, Title } from '../StyledComponents'
import { CiSearch } from "react-icons/ci";
import { FiPrinter } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { fetchData } from '../Redux/actionCreator';

const OrderPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData(dispatch)
    })

    return (
        <div>
            <Navbar />
            <div className='p-2 shadow-md shadow-black-400 items-center bg-white'>
                <div className='flex w-full justify-start'>Order &gt; Order32457ABC</div>
                <div className='flex justify-between items-center'>
                    <Title>Order32457ABC</Title>
                    <div>
                        <ButtonL>Back</ButtonL>
                        <ButtonH>Approve Order</ButtonH>
                    </div>
                </div>
            </div>

            <div className='flex justify-between w-5/6 m-auto p-3 mt-10 bg-white border border-grey-500 rounded-lg'>
                <div>
                    <p>Supplier</p>
                    <p className='font-bold'>East coast fruits<br /> & vegetables</p>
                </div>
                <div className='border-l border-grey-100'></div>

                <div>
                    <p>Shipping date</p>
                    <p className='font-bold'>Thu, Feb 10</p>
                </div>
                <div className='border-l border-grey-100'></div>

                <div>
                    <p >Total</p>
                    <p className='font-bold'></p>
                </div>
                <div className='border-l border-grey-100'></div>

                <div>
                    <p>Category</p>
                    <p className='font-bold'>Categories</p>
                </div>
                <div className='border-l border-grey-100'></div>

                <div>
                    <p>Department</p>
                    <p className='font-bold'>300-444-678</p>
                </div>
                <div className='border-l border-grey-100'></div>

                <div>
                    <p>Status</p>
                    <p className='font-bold'>Awaiting your<br />approval</p>
                </div>

            </div>

            <div className='w-5/6 m-auto mt-10 p-3 bg-white border border-grey-500 rounded-lg'>
                <div className='flex justify-between'>
                    <Search>
                        <p>Search...</p>
                        <CiSearch />
                    </Search>

                    <div className='flex justify-between items-center'>
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