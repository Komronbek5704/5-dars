import React from 'react';
import './service.css';

const Services = () => {
    return (
        <div className='services'>
           <div >
            <img className='services-img' src="../public/servise.png" alt="" />
            
            </div>
            <div className='services-cards'>

                <div className='services-card'>
                    <h1>Project Plan</h1>
                    <p>
                        There are many variations of the passages of lorem Ipsum from 
                    available, majority.
                    </p>
                    <img src="../public/Button.svg" alt="" />
                </div>

                <div className='services-card'>
                    <h1>Interior Work</h1>
                    <p>
                        There are many variations of the passages of lorem Ipsum from 
                    available, majority.
                    </p>
                    <img src="../public/Button.svg" alt="" />
                </div>

                <div className='services-card'>
                    <h1>Retail Design</h1>
                    <p>
                        There are many variations of the passages of lorem Ipsum from 
                    available, majority.
                    </p>
                    <img src="../public/Button.svg" alt="" />
                </div>

                <div className='services-card'>
                    <h1>2d/3d Art Work</h1>
                    <p>
                        There are many variations of the passages of lorem Ipsum from 
                    available, majority.
                    </p>
                    <img src="../public/Button.svg" alt="" />
                </div>

                <div className='services-card-active'>
                    <h1>Interior Work</h1>
                    <p>
                        There are many variations of the passages of lorem Ipsum from 
                    available, majority.
                    </p>
                    <img src="../public/Button.svg" alt="" />
                </div>

                <div className='services-card'>
                    <h1>Project Plan</h1>
                    <p>
                        There are many variations of the passages of lorem Ipsum from 
                    available, majority.
                    </p>
                    <img src="../public/Button.svg" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Services;