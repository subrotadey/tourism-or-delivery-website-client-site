import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header.css'

const Footer = () => {
    return (
        <div>
            <div >
                <div className='top-footer  text-white py-5 mt-5'>
                    <h1>Be with Us</h1>
                    <h3>Get healthy service, treatment and solutions to your problems from our experts!</h3>
                </div>
            <div className='footer text-light bg-dark pb-3 px-2'>
                <Row xs={1} md={3} xl={3} className="g-4">
                    <Col>
                        <Card.Body>
                            <Card.Title> <h3>Contact Information</h3> </Card.Title>
                            <hr />
                            <Card.Text>
                                <p>1675/A, O.R Nizam Road Chittagong Bangladesh</p>
                                <p> <a href="/">http://cscrbd.com/</a></p>
                                <p> <a href="/">info@cscrbd.com</a></p>
                                <p>031-656565</p>
                                <div>
                                    <i className="fab fa-facebook-f px-2 fs-4"></i>
                                    <i className="fab fa-twitter px-4 fs-4"></i>
                                    <i className="fab fa-instagram px-2 fs-4"></i>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title> <h3>Services</h3> </Card.Title>
                            <hr />
                            <Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <ul>
                                            <ol>
                                                <p><a href="/">Countries</a></p>
                                                <p><a href="/">Religion</a></p>
                                                <p><a href="/">Districts</a></p>
                                                <p><a href="/">Airports</a></p>
                                                <p><a href="/">Hotels</a></p>
                                                <p><a href="/">Interested Places</a></p>
                                            </ol>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <ol>
                                                <p><Link to="/">Home</Link></p>
                                                <p><Link to="/">Apartments</Link></p>
                                                <p><Link to="/">Resorts</Link></p>
                                                <p><Link to="/">Hostels</Link></p>
                                                <p><Link to="/">Guest Houses</Link></p>
                                                <p><Link to="/">Villas</Link></p>
                                            </ol>
                                        </ul>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <div>
                            <h3 className='pt-3'>Contact Us</h3>
                            <hr />
                            <form className='p-3'>
                                <div class="form-group">
                                    <label className='p-2' for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label  className='p-2' for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div className='p-4'>
                                    <button type="submit" class="btn btn-primary">Subscribe Now</button>
                                </div>
                                </form>
                        </div>
                    </Col>
                </Row>
                <hr />
            <p> <small className='text-light'>World Famous Travelling Agency &copy; 2021 | All Rights Reserved</small> </p>
            <p><small>Developed By Subrota@Dey</small></p>
            </div>
        </div>
        </div>
    );
};

export default Footer;