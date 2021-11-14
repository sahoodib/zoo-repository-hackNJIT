import React from "react";
import './AnimalPage.css';
import CarousalSlider from "./common/CarousalSlider";

class Animal extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <CarousalSlider data={}>
                    </div>
                    <div class="col">
                        Hello World
                    </div>
                </div>
                <div class="row">
                    <div class="col">

                    </div>
                </div>
            </div>
        );
    }
}
export default Animal;