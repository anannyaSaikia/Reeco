import React from 'react';
import { useSelector } from 'react-redux';
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { orderApproved, orderMissing, orderMissingUrgent } from '../Redux/actionCreator';
import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ProductsTable = () => {
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);
    const [name, setName] = useState("");

    const handleShow = () => setShow(true);

    const orders = useSelector((store) => {
        return store.data
    })

    //console.log(orders);
    const dispatch = useDispatch();

    const handleCrossMissing = (id) => {
        console.log(id);
        dispatch(orderMissing(id))
        setShow(false)
    }
    const handleCrossMissingUrgent = (id) => {
        console.log(id);
        dispatch(orderMissingUrgent(id))
        setShow(false)
    }
    const handleTick = (id) => {
        dispatch(orderApproved(id))
    }

    return (
        <table className='w-full table-auto mt-5'>
            <thead>
                <tr>
                    <th></th>
                    <th>Product name</th>
                    <th>Brand</th>
                    <th className='m-5'>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th className='w-1/4 bg-slate-200'>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders?.map((ele, i) => {
                        return (
                            <tr key={i}>
                                <td><img src={ele.image} alt='Avocado' /></td>
                                <td>{ele.name}</td>
                                <td>{ele.brand}</td>
                                <td >{ele.price}</td>
                                <td>{ele.quantity}</td>
                                <td>{ele.total}</td>
                                <td className='flex justify-between items-center w-full px-5 bg-slate-200'>
                                    <p className={ele.status === 'approved' ? 'bg-green-500 flex justify-start rounded px-3 ml-[-40px] mt-3' : (ele.status === 'missing' || 'missingUrgent' ? 'bg-red-500 flex justify-start rounded px-3 ml-[-40px] mt-3' : 'bg-white flex justify-start rounded px-3 ml-[-40px] mt-3')}>{ele.status}</p>
                                    <div className='flex justify-end items-center'>
                                        <RxCross1 className={ele.status === 'missing' ? 'text-red-400 mr-3 ' : (ele.status === 'missingUrgent' ? 'text-red-700 mr-3' : 'text-black mr-3')} onClick={() => {
                                            handleShow()
                                            setId(ele.id)
                                            setName(ele.name)
                                        }} />

                                        <Modal show={show} onHide={() => setShow(false)}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Missing product</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>{`Is '${name}' urgent?`}</Modal.Body>
                                            <Modal.Footer>
                                                <button className='font-bold pr-5' onClick={() => {
                                                    handleCrossMissing(id)
                                                }}>
                                                    No
                                                </button>
                                                <button className='font-bold pr-5' onClick={() => {
                                                    handleCrossMissingUrgent(id)
                                                }}>
                                                    Yes
                                                </button>
                                            </Modal.Footer>
                                        </Modal>

                                        <TiTick onClick={() => handleTick(ele.id)} className={ele.status === 'approved' ? 'text-green-500 mr-3' : 'text-black mr-3'} />
                                        <p className='pt-3'>Edit</p>
                                    </div>
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