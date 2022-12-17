import React from 'react';
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <>
            <Header />
            <div className="">
                <Routers />
            </div>
            <Footer />
        </>
    );
};

export default Layout;