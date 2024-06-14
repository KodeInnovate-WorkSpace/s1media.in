import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const MyFooter = () => {
    return (
        <>
            <div className='text-center text-lg-start bg-black text-white'>
                <section>
                    <Container className='text-center text-md-start mt-5'>
                        <Row className='mt-3'>
                            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <i icon="gem" className="me-3" />
                                    S1Media
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </Col>

                            <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Navigation</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        About Us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Our Services
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Contact Us
                                    </a>
                                </p>
                            </Col>

                            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </Col>

                            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <i className="me-2" />
                                    Mumbai, MH 10012, India
                                </p>
                                <p>
                                    <i className="me-3" />
                                    info@example.com
                                </p>
                                <p>
                                    <i className="me-3" />+91 9999999999
                                </p>
                                <p>
                                    <i className="me-3" />+91 9999999999
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <div className='text-center p-4' >
                    © S1Media, 2024. All rights reserved.
                </div>
                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    Powered by <a href="https://kodeinnovate.in/" className='text-white text-decoration-none'>Kodeinnovate Solutions Private Limited</a>
                </div>
            </div>
        </>
    );
}
