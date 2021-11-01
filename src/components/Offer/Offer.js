import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Offer = (props) => {
    const { name, img, details, _id, title, key } = props.offer;
    return (
        <div>
            <Col className='offer border'>
                <div className='img rounded-3'><Card.Img variant="top" src={img} /></div>
                <Card.Body className='offer-details bg-black text-white'>
                    <Card.Title>{name}</Card.Title>
                    <h6>{title}</h6>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <h6>per-night ${key} will be charged.</h6>
                    <Link to={`/booking/${_id}`}><button className='btn btn-success' >Book Now</button></Link>
                </Card.Body>
            </Col>
        </div>
    );
};

export default Offer;