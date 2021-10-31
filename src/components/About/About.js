import React from 'react';
import { Col } from 'react-bootstrap';

const About = () => {
    return (
        <div className='mt-5 pt-5'>
            <div className='m-3'>
                <h3>Help center</h3>
                <Col>
                    <h2>Welcome to help center</h2>
                    <p>Sign in to contact Customer Service, we're available 24 hours a day</p>
                    <div className='d-flex justify-content-around'>
                        <div className='d-flex text-justify w-25 border p-2'>
                            <small><i className="far fa-comments"></i></small>
                            <div>
                                <h3>Live site</h3>
                                <p>The fastest way to talk to one of our Customer Service agents about your bookings.</p>
                            </div>
                        </div>
                        <div className='d-flex text-justify w-25 border p-2'>
                            <small><i className="fas fa-phone-volume"></i></small>
                            <div>
                                <h3>Call Now</h3>
                                <p>The fastest way to talk to one of our Customer Service agents about your bookings.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </div>
            <div className='mx-auto w-50 border my-4'>
                <h3>Frequently asked question</h3>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Who is going to charge my credit card, and when?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">You may be charged a prepayment according to the property's prepayment policy. This is done to verify your credit card, where a temporary hold is placed on an amount until after check-out. It's best to contact the property for any charging queries.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Can I cancel my booking?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Yes, any cancellation fees are determined by the property and listed in your cancellation policy. You will pay any additional costs to the property.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                If I need to cancel my booking, will I pay a fee?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body ">If you have a free cancellation booking, you won't pay a cancellation fee. If your booking is no longer free to cancel or is non-refundable, you may incur a cancellation fee. Any cancellation fees are determined by the property. You will pay any additional costs to the property.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;