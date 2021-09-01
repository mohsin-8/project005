import React from 'react';
import products from '../products.json';
import Cards from './Cards';

function Home() {
    return (
        <>
            <img src={products.product1.img} class="img-fluid" width="12100" alt="Responsive image" />

            <div className="my-5">
                <Cards />
            </div>
        </>
    )
}

export default Home;