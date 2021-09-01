import React from 'react';

function Footer() {
    return (
        <div>
            <footer class="footer text-center text-lg-start bg-light text-muted">
                <section
                    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with me on social networks:</span>
                    </div>
                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>Mohsin Ali Khan
                                </h6>
                                <p>
                                    Bootcamp2020 Project 3 Shoe Store with React Routerv6
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="https://github.com/mohsin-8" style={{ textDecoration: 'none' }} target="_blank" class="text-reset">Github</a>
                                </p>
                                <p>
                                    <a href="https://www.facebook.com/mohsin.khan.370" style={{ textDecoration: 'none' }} target="_blank" class="text-reset">Facebook</a>
                                </p>
                                <p>
                                    <a href="https://www.linkedin.com/in/mohsin-ali-khan-1071ab1b6/" style={{ textDecoration: 'none' }} target="_blank" class="text-reset">Linkeden</a>
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i class="fas fa-home me-3"></i> Karachi, Pakistan</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    m0m0o00@hotmail.com
                                </p>
                                <p><i class="fas fa-print me-3"></i>03150258714</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2021 Copyright:
                    <a class="text-reset fw-bold" href="https://portfolio-khan1.netlify.app" target="_blank" style={{ textDecoration: 'none' }}> Mohsin Ali Khan </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
