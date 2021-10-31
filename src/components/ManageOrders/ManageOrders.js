import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Header/Header.css'

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    const [isPending, setIspending] = useState(true)
    useEffect(() => {
        fetch('https://agile-wildwood-80919.herokuapp.com/store')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete? ')
        if (proceed) {
            const url = `https://agile-wildwood-80919.herokuapp.com/store/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Offer deleted successfully.')
                        const remainingOrder = allOrders?.filter(order => order._id !== id)
                        setAllOrders(remainingOrder)
                    }

                })
        }
    }
    const handleOrder = () => {
        setIspending(false)
    }
    return (
        <div className='mt-5 pt-2 my-order'>
            {allOrders && <Row md={1} className='g-4'>
                <h1>All orders</h1>
                <hr className='w-75 mx-auto' />
                {
                    allOrders?.map(myOrder => <Row >
                        <Col>{myOrder.order.name}</Col>
                        <Col>{isPending ? <small>{myOrder.pending}</small> : <small>order approved.</small>}</Col>
                        <Col className='pb-2'><button onClick={() => handleDelete(myOrder._id)}><i className="fas fa-trash-alt "></i></button></Col>
                        <hr className='' />
                    </Row>)
                }

            </Row>
            }
            <button className='btn btn-success' onClick={handleOrder}>confirm order</button>
        </div>
    );
};

export default ManageOrders;