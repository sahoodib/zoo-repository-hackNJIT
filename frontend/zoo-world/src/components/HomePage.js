import React from "react";
import {Link} from "react-router-dom";
import CarousalSlider from './common/CarousalSlider';
import './HomePage.css';
import "./Home/Slider.css";
import {HomeImage} from "./Home/HomeImage";

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <CarousalSlider data={HomeImage} />
            </div>
        );
    }
}

export default HomePage;