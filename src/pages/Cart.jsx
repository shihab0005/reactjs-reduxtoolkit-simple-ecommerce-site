import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/cart.css'

import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';


const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems)

    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length === 0 ? <h2 className='fs-4 text-center'>No Item Added In Cart</h2> : <table className='table bordered'>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th whileTap={{ scale: 1.2 }}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map((item, index) => (
                                                <Tr item={item} key={index} />
                                            ))
                                        }

                                    </tbody>

                                </table>
                            }

                        </Col>

                        <Col lg='3'>

                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    );
};
const Tr = ({ item }) => {
    const dispatch = useDispatch();
    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }
    return (
        <tr>
            <td>
                <img src={item.imgUrl} alt="product_img" />
            </td>
            <td>{item.productName}</td>
            <td>${item.price}</td>
            <td>{item.quantity}px</td>
            <td>
                <motion.i
                    whileTap={{ scale: 1.2 }}
                    className="ri-delete-bin-line"
                    onClick={deleteProduct}
                >
                </motion.i>
            </td>
        </tr>
    )
}
export default Cart;