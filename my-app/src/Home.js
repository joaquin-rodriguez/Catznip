import React from 'react';
import { Image } from 'react-bootstrap';
import Cat from '../src/imagenes/newnewcat.jpg'

function Home() {
    return (
        <div className="HomeBackground">
            <Image className="cat" src={Cat} fluid />
        </div>

    )
}
export default Home;