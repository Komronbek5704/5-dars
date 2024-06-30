
import React, { useState, useEffect } from 'react';
import './project.css';

function Furniture() {
    const [furniture, setFurniture] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/furniture`)
            .then(response => response.json())
            .then(data => setFurniture(data));
    }, []);

    const filteredFurniture = filter === 'all' ? furniture : furniture.filter(item => item.type === filter);

    return (
        <div>
            <div className='project-page'>
                <div>
                    <img className='project-img' src="../public/project.png" alt="" />
                </div>
            </div>
            <div className='project-buttons' >
                <div className='buttons'>
                    <button onClick={() => setFilter('all')}>All</button>
                    <button onClick={() => setFilter('bathroom')}>Bathroom</button>
                    <button onClick={() => setFilter('bedroom')}>Bedroom</button>
                    <button onClick={() => setFilter('kitchan')}>Kitchan</button>
                </div>
            </div>
            <div className='project-cards'>
                {filteredFurniture.map(item => (
                    <div className='project-card'>
                        <img className='project-img-card' src={item.image} alt="" />
                        <div className='main-cards'>
                            <div className='cards-text'>
                                <h1>{item.name}</h1>
                                <p>{item.description}</p>
                            </div>
                            <img src="../public/pj.svg" alt="" />

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Furniture;