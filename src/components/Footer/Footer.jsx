import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import slogo from '../../assets/images/eco-logo.png';



const Footer = () => {

    const year = new Date().getFullYear;
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg="4">
                        {/* <div className="logo"> */}
                        {/* <img src={slogo} alt="Shopping_logo" /> */}
                        {/* <div > */}
                        <h1 className="text-white">WeTech Mart</h1>
                        {/* </div> */}

                        {/* </div> */}
                        <p className="footer_text mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius similique dolorum reprehenderit quos beatae expedita dicta eaque quae nesciunt.</p>

                    </Col>

                    <Col lg="3">
                        <div className="footer_quick_links">
                            <h4 className="quick_links_title">
                                Top Categories
                            </h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Mobile Phone</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Modern Sofa</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Arm Chair</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Smart Watch</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="2">
                        <div className="footer_quick_links">
                            <h4 className="quick_links_title">
                                Usefull Links
                            </h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/shop">Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/cart">Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/login">Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="3">
                        <div className="footer_quick_links">
                            <h4 className="quick_links_title">
                                Usefull Links
                            </h4>
                            <ListGroup className='mb-3 footer_contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>124 Panthapath,Dhanmondi-32</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>+0880123456780</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-mail-line"></i></span>
                                    <p>wetech12@gmsil.com</p>
                                </ListGroupItem>

                             
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className="footer_copyright">
                            Copyright {year}.Developed By wetechMath.All Right Reserved.
                        </p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;