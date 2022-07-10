import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../components/assets/img2.jpg'
import img2 from '../components/assets/img3.jpeg'
import img3 from '../components/assets/img4.jpg'




const CarouSel=()=> {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img1}
                    style={{ height: '500px !important' }}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=" w-100"
                    src={img2}
                    alt="Second slide"
                    style={{ height: '500px !important'}}
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={img3}
                    style={{ height: '300px !important' }}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouSel;