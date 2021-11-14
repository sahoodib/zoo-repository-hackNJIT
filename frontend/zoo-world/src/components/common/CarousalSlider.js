import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const CarousalSlider = (props)=>{
    return (
        <div id="home-slider">
            <div style={{position:"absolute", width:"100%", height: "100%", backgroundColor: "black"}}></div>
            <Carousel >    
                {
                    props.data.map((e,i)=>{
                        return (
                            <Carousel.Item key={e.alt}>
                                <img className="d-block w-100" src={e.src} alt={e.alt} />

                                <Carousel.Caption>
                                    <h3>{e.title}</h3>
                                    <p>{e.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        </div>
    );
}

export default CarousalSlider;

