import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import heroImg from '../assets/images/hero-img.png';
import timerImg from "../assets/images/counter-timer-img.png"
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../Services/Services';
import ProductList from '../components/UI/ProductList';
import products from '../assets/data/products';
import Clock from '../components/UI/Clock';

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([])
    const [wirlessProducts, setWirlessProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])

    useEffect(() => {
        const filteredTrendingProduct = products.filter((item) => item.category === "chair");

        const filteredBestSaleProduct = products.filter((item) => item.category === 'sofa')

        const filteredMobileProduct = products.filter((item) => item.category === 'mobile');

        const filteredWirlessProduct = products.filter((item) => item.category === 'wireless');

        const filteredPopularProduct = products.filter((item) => item.category === 'watch');

        setBestSalesProducts(filteredBestSaleProduct);
        setTrendingProducts(filteredTrendingProduct);
        setMobileProducts(filteredMobileProduct);
        setWirlessProducts(filteredWirlessProduct);
        setPopularProducts(filteredPopularProduct);

    }, [])
    const year = new Date().getFullYear();
    
    return (
        <Helmet title='home'>
            <section className="hero_section">
                <Container>
                    <Row>
                        <Col lg='6' md="6">
                            <div className="hero-content">
                                <p className="hero_subtitle">Trending Product of {year}</p>
                                <h2>Make Your Interior Minimalstic & Modern</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt velit dolor ut non est nemo in dolores. Natus consectetur explicabo enim vel dolore illum ipsa inventore. Iure ex reiciendis hic.</p>

                                <motion.button whileTap={{ scale: 1.2 }} className='shop_btn'><Link to="/shop">SHOP NOW</Link></motion.button>
                            </div>
                        </Col>

                        <Col lg='6' md="6">
                            <div className="hero_img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Services />

            <section className="trending_products">
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2 className="section_title">Trending Product</h2>
                        </Col>
                        <ProductList data={trendingProducts} />
                    </Row>
                </Container>
            </section>

            <section className="best_sales">
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2 className="section_title">Best Sales</h2>
                        </Col>
                        <ProductList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>


            <section className="timer_count">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="clock_top_content">
                                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                            </div>
                            <Clock />

                            <motion.button whileTap={{ scale: 1.2 }} className='shop_btn store_btn'><Link to="/shop">Visit Store</Link></motion.button>
                        </Col>
                        <Col lg="6" md="6" className='text-end'>
                            <img src={timerImg} alt="" />
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className="new_arrivals">
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2 className="section_title">New Arrivals</h2>
                        </Col>
                        <ProductList data={mobileProducts} />
                        <ProductList data={wirlessProducts} />
                    </Row>
                </Container>
            </section>
            <section className="popular_category">
                <Container>
                    <Row>
                        <Col lg="12" className='text-center mb-3'>
                            <h2 className="section_title">Popular in Category</h2>
                        </Col>
                        <ProductList data={popularProducts} />
                        {/* <ProductList data={wirlessProducts} /> */}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;