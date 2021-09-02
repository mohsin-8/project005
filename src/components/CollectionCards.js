import React from 'react';
import products from '../products.json';
import './styles/CardsCollection.css';

function CollectionCards() {
    return (
        <div className="container py-5">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={products.product6.img} class="card-img-top" alt={products.product6.name} />
                        <div class="card-body">
                            <h5 class="card-title">{products.product6.name}</h5>
                            <p>price: ${products.product6.price}</p>
                        </div>
                        <div class="card-footer">
                            <button className="btn btn-success">View item</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={products.product8.img} class="card-img-top" alt={products.product8.name} />
                        <div class="card-body">
                            <h5 class="card-title">{products.product8.name}</h5>
                            <p>price: ${products.product8.price}</p>
                        </div>
                        <div class="card-footer">
                            <button className="btn btn-success">View item</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={products.product10.img} class="card-img-top" alt={products.product10.name} />
                        <div class="card-body">
                            <h5 class="card-title">{products.product10.name}</h5>
                            <p>price: ${products.product10.price}</p>
                        </div>
                        <div class="card-footer">
                            <button className="btn btn-success">View item</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container py-5">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src={products.product11.img} class="card-img-top" alt={products.product11.name} />
                            <div class="card-body">
                                <h5 class="card-title">{products.product11.name}</h5>
                                <p>price: ${products.product11.price}</p>
                            </div>
                            <div class="card-footer">
                                <button className="btn btn-success">View item</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={products.product12.img} class="card-img-top" alt={products.product12.name} />
                            <div class="card-body">
                                <h5 class="card-title">{products.product12.name}</h5>
                                <p>price: ${products.product12.price}</p>
                            </div>
                            <div class="card-footer">
                                <button className="btn btn-success">View item</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={products.product13.img} class="card-img-top" alt={products.product13.name} />
                            <div class="card-body">
                                <h5 class="card-title">{products.product13.name}</h5>
                                <p>price: ${products.product13.price}</p>
                            </div>
                            <div class="card-footer">
                                <button className="btn btn-success">View item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCards;