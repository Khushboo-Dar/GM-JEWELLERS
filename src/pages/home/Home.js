import React from 'react';
import Header from '../../components/Header';
import Services from './components/Services';
import '../../home.css';
const Home = () => {
    return (
        <>
            <Header />
            <div className="hero">
                <div className="hero-text">
                    <h1>Beautiful, masterful</h1>
                    <h1>design never goes</h1>
                    <h1>out of fashion.</h1>
                    <div className="buttons">
                        <button className="contact-btn">Contact</button>
                        <a href="#gallery" className="gallery-link">Gallery →</a>
                    </div>
                </div>
                <div className="hero-image">
                   
                    <img src="/jwellery-1.jpg" alt="ear Ring" className="stone-image" /> 
                    <div className="brown-box"></div>
                    <img src="/diamond-ring.jpg" alt="Diamond Ring" className="diamond-image" />
                </div>
            </div>
            <div className='container'>
                <Services />
            </div>
        </>
    );
}

export default Home;
