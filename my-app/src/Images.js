import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import catpic from '../src/imagenes/catslide.jpg';
import catpicc from '../src/imagenes/catslidee.jpg';
import catpiccc from '../src/imagenes/test.jpg';

function Images() {
    return (
        <Carousel className="Carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={catpic}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Find the perfect cat for you!</h3>
                    <p>Feel free to check our wide selection of cats</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={catpicc}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>All the cats we sell are Trump supporters </h3>
                    <p>Just kidding we hope bernie wins this time</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={catpiccc}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Take our cat personality test</h3>
                    <p>Fill out cat personality test to find the perfect match for you.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Images;