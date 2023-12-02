import React from 'react';
import {  useSelector } from 'react-redux';
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const ProductsTable = () => {

    const orders = useSelector(state => state.orders)
    //console.log(orders);
  
    return (
        
            <table className='w-full table-auto mt-5'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Product name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((ele, i)=>{
                            return (
                                <tr key={i}>
                                    <td><img src={ele.image} alt='Avocado'/></td>
                                    <td>{ele.name}</td>
                                    <td>{ele.brand}</td>
                                    <td>{ele.price}</td>
                                    <td>{ele.quantity}</td>
                                    <td>{ele.total}</td>
                                    <td className='flex justify-between items-center'>
                                        <p className={ele.status === 'approved' ? 'bg-green-500' : (ele.status === 'missing' || 'missingUrgent' ? 'bg-red-500' : 'bg-white')}>{ele.status}</p>
                                        <RxCross1 className={ele.status === 'missing' ? 'text-red-400' : (ele.status === 'missingUrgent' ? 'text-red-700'  : 'text-grey')} />
                                        <TiTick className={ele.status === 'approved' ? 'text-green-500' : 'text-grey'}/>
                                        <p>Edit</p>
                                    </td>
                                </tr>
                            )
                        })
                    }                    
                </tbody>
            </table>
      
    )
}

export default ProductsTable