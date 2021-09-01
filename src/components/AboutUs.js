import React from 'react';
import products from '../products.json';

function AboutUs() {
    return (
        <div className="container">
            <h1 className="py-5" style={{ textAlign: 'center', color: '#fff' }}>About Us</h1>
            <h4 style={{ color: '#000' }}>The adidas brand has a long history and deep-rooted connection with sport.
                It’s broad and diverse portfolio in both the Sport Performance and Sport Inspired categories ranges from
                major global sports to regional grassroot events  and local sneaker culture. This has enabled adidas to transcend
                cultures and become one of the most recognized, credible, and iconic brands both on and off the field of play.</h4>

            <h1 className="py-5 container-fluid" style={{ color: '#000' }}>OUR PURPOSE</h1>

            <img class="img-fluid" width="900px" src={products.purpose.img} alt="" />

            <h5 className="py-5">Everything we do is rooted in sport. Sport plays an increasingly
                important role in more and <br /> more people’s lives, on and off the field
                of play. It is central to
                every culture and society and is <br /> core to our health and happiness. <br /> <br />
                Our purpose, ‘through sport, we have the power to change lives’,
                guides the way we run our <br /> company, how we work with our partners,
                how we create our products, and how we engage <br /> with our consumers.
                We will always strive to expand the limits of human possibilities, to <br /> include
                and unite people in sport, and to create a more sustainable world.  </h5>
        </div>
    )
}

export default AboutUs;
