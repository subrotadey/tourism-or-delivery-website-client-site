import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Offer from '../../Offer/Offer';

const Offers = () => {
    const [services, setServices] = useState([])
    const [dataLoading, setDataLoading] = useState(true)
    useEffect(() => {
        setDataLoading(true)
        fetch('https://agile-wildwood-80919.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        setDataLoading(false)
    }, [])
    return (
        <div className='mt-5 pt-3'>
            <h1>Our Services</h1>
            <hr className='w-25 mx-auto text-success' />
            {
                dataLoading && <Spinner animation="border"></Spinner>
            }
            <Row xs={1} sm={3} md={3} className='g-4 mx-4 pb-3'>
                {
                    services?.map(service => <Offer
                        key={service.id}
                        offer={service}
                    ></Offer>)
                }
            </Row>
        </div>
    );
};

export default Offers;