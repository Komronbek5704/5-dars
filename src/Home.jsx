import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div>
             <div className="home">
                 <img className='home-img' src="../public/background.png" alt="" />
             </div>
               
           <div className='home-cards'>

                <div className='home-card'>
                <h1>Project Plan</h1>
                <p>
                    There are many variations of the passages of lorem Ipsum from 
                available, majority.
                </p>
                <img src="../public/Button.svg" alt="" />
            </div> 
            <div className='home-card'>
                <h1>Project Plan</h1>
                <p>
                    There are many variations of the passages of lorem Ipsum from 
                available, majority.
                </p>
                <img src="../public/Button.svg" alt="" />
            </div> 
            <div className='home-card'>
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

export default Home;
