import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../Header/Header.css'

const Tours = () => {
    return (
        <div className='mt-5 p-5'>
            <h1>We also provide</h1>
            <hr className='w-25 mx-auto' />
            <Row xs={1} md={3} sm={2}>
                <Col className='tour'>
                    <div><i className="fas fa-globe-asia icon"></i></div>
                    <div>
                        <h1>World Tour</h1>
                        <p>The bold, diverse land full of ironic contradictions is something that entire Africa.</p>
                    </div>
                </Col>
                <Col className='tour'>
                    <div><i className="fas fa-plane-departure icon"></i></div>
                    <div>
                        <h1>Cruises</h1>
                        <p>The bold, diverse land full of ironic contradictions is something that entire Africa.</p>
                    </div>
                </Col>
                <Col className='tour'>
                    <div><i className="fas fa-ship icon"></i></div>
                    <div>
                        <h1>Best Tours</h1>
                        <p>The bold, diverse land full of ironic contradictions is something that entire Africa.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Tours;