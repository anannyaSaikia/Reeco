import React from 'react';
import { useSelector } from 'react-redux';
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { orderApproved, orderMissing, orderMissingUrgent } from '../Redux/actionCreator';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
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
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th className='w-1/3'>Status</th>
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
                                <td>{ele.price}</td>
                                <td>{ele.quantity}</td>
                                <td>{ele.total}</td>
                                <td className='flex justify-between items-center w-full px-5'>
                                    <p className={ele.status === 'approved' ? 'bg-green-500 flex w-1/3 justify-start rounded' : (ele.status === 'missing' || 'missingUrgent' ? 'bg-red-500 flex w-1/3 justify-start rounded' : 'bg-white flex w-1/3 justify-start rounded')}>{ele.status}</p>
                                    <div className='flex justify-between w-2/3'>
                                        <RxCross1 className={ele.status === 'missing' ? 'text-red-400' : (ele.status === 'missingUrgent' ? 'text-red-700' : 'text-grey')} onClick={() => {
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
                                                <Button variant="secondary" onClick={() => {
                                                    handleCrossMissing(id)
                                                }}>
                                                    No
                                                </Button>
                                                <Button variant="primary" onClick={() => {
                                                    handleCrossMissingUrgent(id)
                                                }}>
                                                    Yes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>

                                        <TiTick onClick={() => handleTick(ele.id)} className={ele.status === 'approved' ? 'text-green-500' : 'text-grey'} />
                                        <p>Edit</p>
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