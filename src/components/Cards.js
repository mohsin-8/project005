import React from 'react';
import products from '../products.json';

function Cards() {
    return (

        <div className="container">
            <h1 style={{ color: "#fff", textAlign: 'center' }}>ADIDAS OUTLET</h1>
            <div class="py-5 row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src={products.product2.img} class="card-img-top" alt={products.product2.name} />
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={products.product3.img} height="362px" class="card-img-top" alt="..." />

                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={products.product4.img} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={products.product5.img} class="card-img-top" alt="..." />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;
