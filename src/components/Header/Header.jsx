import React, { useEffect, useRef } from 'react';
import { Container, Row } from 'reactstrap';
import './header.css';
import slogo from '../../assets/images/eco-logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';

const nav_links = [
    {
        path: "home",
        display: "Home"
    },
    {
        path: "shop",
        display: "Shop"
    },
    {
        path: "cart",
        display: "Cart"
    }
]

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate()

    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const stickyHeaderFunction = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("sticky-header")
            }
            else {
                headerRef.current.classList.remove("sticky-header")
            }
        })
    }

    const menuToggol = () => menuRef.current.classList.toggle('active_menu');

    useEffect(() => {
        stickyHeaderFunction()

        return () => window.removeEventListener('scroll', stickyHeaderFunction);
    })

    const navigateToCart = () => {
        navigate('/cart')
    }
    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav_wrapper">

                        <div className="logo">
                            <img src={slogo} alt="Shopping_logo" />
                            <h1>WeTech Mart</h1>
                        </div>

                        <div className="navigation" ref={menuRef} onClick={menuToggol}>
                            <ul className="menu">
                                {
                                    nav_links.map((item, index) => (
                                        <li className="nav_item" key={index}>
                                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ""}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                                {/* 
                                <li className="nav_item">
                                    <NavLink to='cart'>Cart</NavLink>
                                </li> */}
                            </ul>
                        </div>

                        <div className="nav_icons">

                            <span className="fav_icon">
                                <i className="ri-heart-line"></i>
                                <span className="badge">2</span>
                            </span>

                            <span className="cart_icon" onClick={navigateToCart}>
                                <i className="ri-shopping-bag-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>

                            <span>
                                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
                            </span>

                            <div className="mobile_menu">
                                <span onClick={menuToggol}>
                                    <i className="ri-menu-line">

                                    </i>
                                </span>
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;