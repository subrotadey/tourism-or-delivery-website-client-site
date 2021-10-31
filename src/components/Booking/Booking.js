import { Card, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useData from '../../hooks/useData';
import { useForm } from "react-hook-form";
import '../Header/Header.css'
import axios from 'axios';

const Booking = () => {
    const { id } = useParams()
    const { services } = useData()
    const history = useHistory()
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const orderItem = services.filter(service => service._id === id)
    const onSubmit = data => {
        const order = orderItem[0];

        const orderDetail = {
            order,
            userData: data,
            pending: 'order pending',
            email: user.email
        }
        axios.post("https://agile-wildwood-80919.herokuapp.com/store", orderDetail)
            .then(res => {
                if (res.data.insertedId) {
                    alert('order placed successfully')
                    reset();
                    history.push('/myOrders')
                }
            })
    };


    return (
        <div className='mt-5 p-5'>
            {
                orderItem[0] && <Row xs={1} sm={2} md={2} className='g-4'>
                    <Col className='offer'>
                        <div className='img'> <Card.Img variant="top" src={orderItem[0].img} /></div>
                        <Card.Body className='offer-details'>
                            <Card.Title>{orderItem[0].name}</Card.Title>
                            <h6>{orderItem[0].title}</h6>
                            <Card.Text>
                                {orderItem[0].details}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col className='place-order'>
                        <h1>Order place Now</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("firstName", { required: true, maxLength: 20 })} placeholder='first name' />
                            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder='last name' />
                            <input type="submit" value="Place Order" />
                        </form>
                    </Col>
                </Row>
            }
        </div>
    );
};

export default Booking;