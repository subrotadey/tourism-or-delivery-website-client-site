import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import '../Header/Header.css'

const MyOrders = () => {
    const { user } = useAuth()
    const email = user.email;
    const [orders, setOrder] = useState([])
    useEffect(() => {
        fetch(`https://agile-wildwood-80919.herokuapp.com/store`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    const myOrders = orders?.filter(order => order.email === email)


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
                        const remainingOrder = orders?.filter(order => order._id !== id)
                        setOrder(remainingOrder)
                    }
                })
        }
    }
    return (
        <div className='mt-5 pt-4 my-order'>
            {myOrders && <Row md={1} className='g-4'>
                <h1>My orders</h1>
                <hr className='w-75 mx-auto' />
                {
                    myOrders?.map(myOrder => <Row 
                    key={myOrder._id}
                    >
                        <Col>{myOrder.order.name}</Col>
                        <Col><small>{myOrder.pending}</small></Col>
                        <Col className='pb-2'><button onClick={() => handleDelete(myOrder._id)}><i className="fas fa-trash-alt "></i></button></Col>
                        <hr className='' />
                    </Row>)
                }
            </Row>
            }
        </div>
    );
};

export default MyOrders;