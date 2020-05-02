import React from 'react';
import { Image } from 'react-bootstrap';
import Cat from '../src/imagenes/Cat.jpg'

function Home() {
    return (
        <div className="HomeBackground">
            <Image className="cat" src={Cat} fluid />
        </div>

    )
}
export default Home;