import React from 'react';
import Header from '../../components/Header';
import Services from './components/Services';
import '../../home.css';
const Home = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <Services />
            </div>
        </>
    );
}

export default Home;
