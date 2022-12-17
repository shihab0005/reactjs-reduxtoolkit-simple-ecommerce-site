import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/product-details.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProductList from '../components/UI/ProductList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';


const ProductDetails = () => {
    const [tab, setTab] = useState("desc");
    const reviewUser = useRef('');
    const reviewMsg = useRef('');

    const dispatch = useDispatch();

    const [rating, setRating] = useState(null);
    const { id } = useParams();
    const product = products.find(item => item.id === id);
    const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product;

    const relatedProduct = products.filter(item => item.category === category);

    const submitHandler = (e) => {
        e.preventDefault();

        const reviewUserName = reviewUser.current.value;
        const reviewUserMsg = reviewMsg.current.value;

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating
        }
        toast.success("Thanks For Your Review")
        console.log(reviewObj);
    }

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            imgUrl: imgUrl,
            productName,
            price
        }))
        toast.success("Product Add Successfully")
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])

    return (
        <Helmet title={productName}>
            <CommonSection title={productName} />

            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="6">
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg="6">
                            <div className="product_details">
                                <h2>{productName}</h2>
                                <div className="product_rating gap-3 ">
                                    <div className="">
                                        <span><i className="ri-star-s-fill"></i></span>
                                        <span><i className="ri-star-s-fill"></i></span>
                                        <span><i className="ri-star-s-fill"></i></span>
                                        <span><i className="ri-star-s-fill"></i></span>
                                        <span><i className="ri-star-half-s-fill"></i>
                                        </span>
                                    </div>
                                    <p>(<span>{avgRating}</span> Ratings)</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <span className='product_price'>$ {price}</span>
                                    <span>Category : {category.toUpperCase()}</span>
                                </div>


                                <p className='mt-3'>{shortDesc}</p>
                                <motion.button whileTap={{ scale: 1.2 }} className="shop_btn" onClick={addToCart}>Add to Cart</motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="tab_wrapper d-flex align-items-center gap-5">

                                <h6 className={`${tab === 'desc' ? "active_tab" : ""}`} onClick={() => setTab('desc')}>Description</h6>

                                <h6 className={`${tab === 'rev' ? "active_tab" : ""}`} onClick={() => setTab('rev')}>Reviews ({reviews.length})</h6>
                            </div>
                            {
                                tab === "desc" ? (<div className="tab_content mt-3">
                                    <p>{description}</p>
                                </div>) : (<div className='product_review mt-5'>
                                    <div className="review_wrapper">
                                        <ul>
                                            {
                                                reviews.map((item, index) => (
                                                    <li key={index} className="mb-4">
                                                        <h6>John Doe</h6>
                                                        <span>{item.rating} (Rating)</span>
                                                        <p>{item.text}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>

                                        <div className="review_form">
                                            <h4>Leave Your Experience</h4>
                                            <form onSubmit={submitHandler}>
                                                <div className="form_group">
                                                    <input
                                                        type="text" placeholder='Enter Name'
                                                        ref={reviewUser}
                                                        required
                                                    />
                                                </div>

                                                <div className="form_group d-flex align-items-center gap-5 rating_group">
                                                    <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>1<i className="ri-star-s-fill"></i></motion.span>

                                                    <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>2<i className="ri-star-s-fill"></i>
                                                    </motion.span>

                                                    <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>3<i className="ri-star-s-fill"></i>
                                                    </motion.span>

                                                    <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>4<i className="ri-star-s-fill"></i>
                                                    </motion.span>

                                                    <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>5<i className="ri-star-s-fill"></i>
                                                    </motion.span>
                                                </div>

                                                <div className="form_group">
                                                    <textarea
                                                        ref={reviewMsg}
                                                        rows={4}
                                                        type="text" placeholder='Review Message'
                                                        required
                                                    />
                                                </div>
                                                <motion.button whileTap={{ scale: 1.2 }} className="shop_btn" type='submit'>Submit</motion.button>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                                )}

                        </Col>

                        <Col lg='12'>
                            <h2 className="related_title">
                                You Might Also like
                            </h2>
                        </Col>
                        <ProductList data={relatedProduct} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default ProductDetails;