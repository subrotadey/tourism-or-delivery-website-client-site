import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.jpg'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { logOut, setUser, user, setIsLoading } = useAuth()

    const history = useHistory()
    const handleLogout = () => {
        logOut()
            .then(() => {
                setUser({})
                history.push('/home')
            })
            .finally(() => {
                setIsLoading(true)
            })
    }
    return (
        <div className='main-header py-4'>
            <Navbar className='nav-color' variant='dark' fixed='top' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/home" >Lonely Planet
                    <img className='header-logo-size' src={logo} alt="" />
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/services'>Services</Link></Nav.Link>
                            <Nav.Link ><Link to='/about'>Customer service</Link></Nav.Link>
                            {user.email && <Nav.Link ><Link to='/myOrders'>My orders</Link></Nav.Link>}{
                                user.email && <Nav.Link  >
                                    <Link to='/manage-orders'>Manage all orders</Link>
                                </Nav.Link>}{
                                user.email && <Nav.Link  >
                                    <Link to='/add-service'>Add service</Link>
                                </Nav.Link>}
                        </Nav>
                        <Form className="d-flex">
                            <Link to='/services'><button className='btn btn-success m-1 header-color'>Book Now</button></Link>
                            {user?.email ? <button onClick={handleLogout} className='btn btn-success m-1'>Log out</button> : <Link to='/login'>
                                <button className='btn btn-primary m-1'>Login</button></Link>}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;