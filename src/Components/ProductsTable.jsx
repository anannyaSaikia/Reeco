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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const orders = useSelector((store) => {
        return store.data
    })

    //console.log(orders);
    const dispatch = useDispatch();

    const handleCrossMissing = (id) => {
        dispatch(orderMissing(id))
        handleClose()
    }
    const handleCrossMissingUrgent = (id) => {
        dispatch(orderMissingUrgent(id))
        handleClose()
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
                    <th>Status</th>
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
                                <td className='flex justify-between items-center'>
                                    <p className={ele.status === 'approved' ? 'bg-green-500' : (ele.status === 'missing' || 'missingUrgent' ? 'bg-red-500' : 'bg-white')}>{ele.status}</p>

                                  <RxCross1 className={ele.status === 'missing' ? 'text-red-400' : (ele.status === 'missingUrgent' ? 'text-red-700' : 'text-grey')} onClick={handleShow}/>
                                    
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Missing product</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>{`Is '${ele.name}' urgent?`}</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={() => {
                                                handleCrossMissing(ele.id)
                                            }}>
                                                No
                                            </Button>
                                            <Button variant="primary" onClick={() => {
                                                handleCrossMissingUrgent(ele.id)
                                            }}>
                                                Yes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                    <TiTick onClick={() => handleTick(ele.id)} className={ele.status === 'approved' ? 'text-green-500' : 'text-grey'} />
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