import React from 'react';
import { Link } from 'react-router-dom';

// Import CSS file Header.css
import './styles/Header.css';

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link className="link1" to="/">
                        <a style={{ color: '#fff' }} class="navbar-brand">Hello World</a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link className="link2" to="/">
                                <li class="nav-item">
                                    <a style={{ color: '#fff' }} class="nav-link active" aria-current="page">Home</a>
                                </li>
                            </Link>

                            <Link className="link3" to="/collection">
                                <li class="nav-item">
                                    <a style={{ color: '#fff' }} class="nav-link">Collection</a>
                                </li>
                            </Link>

                            <Link className="link4" to="/about">
                                <li class="nav-item">
                                    <a style={{ color: '#fff' }} class="nav-link">About Us</a>
                                </li>
                            </Link>

                            <Link className="link5" to="/contact">
                                <li class="nav-item">
                                    <a style={{ color: '#fff' }} class="nav-link">Contact Us</a>
                                </li>
                            </Link>
                        </ul>
                        <ul class="navbar-nav ms-auto">
                            <button style={{ color: '#fff', backgroundColor: 'blue' }} class="btn">Create your Account</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
