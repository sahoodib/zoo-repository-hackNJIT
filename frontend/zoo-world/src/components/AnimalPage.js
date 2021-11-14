import React, { useState } from "react";
import './AnimalPage.css';
import CarousalSlider from "./common/CarousalSlider";
import axios from 'axios';
import {v4} from 'uuid';


const url = "http://localhost:3001";




class Animal extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
        this.setInitialResponse = this.setInitialResponse.bind(this);
        this.setInitialResponse1 = this.setInitialResponse1.bind(this);
    }

    componentDidMount(){
        this.setInitialResponse();
    }
    setInitialResponse = async ()=> {
        try{
            const response = await axios.get(url+"/animals",{})
            this.setState({...response.data});
        } catch(err){
        }
    }
    setInitialResponse1 = async (animalId)=> {
        try{
            const response = await axios.get(url+"/animal",{params: {animalId: animalId}})
            this.setState(Object.assign(this.state, {currentAnimal : {...response.data}}));
        } catch(err){
            
        }
    }
    render(){
        
        if(this.state.status==200){
            if(!this.state.animalId){
                this.setState(Object.assign(this.state, {animalId: this.state.data[0].entityId}))
                this.setInitialResponse1(this.state.data[0].entityId)
            }
            const response = this.state.data;
            let status, body;
            if(this.state.currentAnimal){
                [status,body] = [this.state.currentAnimal.status, this.state.currentAnimal.data]
                console.log(this.state.currentAnimal,'animal');
            }
            return (
                <div class="container-fluid">
                    <div class="row w-100">
                        {
                            response.map((ele)=>{
                                return(<div key={ele.entityId} class="col">
                                    <button onClick={async (event)=>{
                                        event.preventDefault();
                                        this.setInitialResponse1(ele.entityId);
                                    }}>{ele.first_Name} {ele.mid_Name} {ele.last_Name}</button>
                                </div>);
                            })
                        }
                    </div>
                    <div class="row pt-5 w-100">
                        <p>CurrentAnimal: {(this.state.animalId)?this.state.animalId:""} | {(this.state.currentAnimal && this.state.currentAnimal.length>0)?this.state.currentAnimal.data[0].first_Name:""} {this.state.currentAnimal&&this.state.currentAnimal.length>0?this.state.currentAnimal.data[0].last_Name:""}</p>
                        <form method="post" action={url+"/reviews"} class="col-12 w-100 ml-5 mt-3">
                            <input style={{visibility: "hidden", zIndex: "-1", position: "absolute", width: 0, height: 0}} type="text" id="sentimentId" name="sentimentId" disabled defaultValue = {v4()} />
                            <input style={{visibility: "hidden", zIndex: "-1", position: "absolute", width: 0, height: 0}} type="text" id="customerId" name="customerId" defaultValue = {v4()} />
                            <input style={{visibility: "hidden", zIndex: "-1", position: "absolute", width: 0, height: 0}} type="text" id="animalId" name="animalId" defaultValue = {(this.state.animalId)?this.state.animalId:""} />
                            <textarea style={{width: "400px", height: "400px"}}type="text" id="comment" name="comment" placeholder="Enter Comment"></textarea> 
                            
                            <div>
                                <input type='submit' style={{width:"200px", heigth:"10px"}} />
                            </div>
                        </form>
                    </div>
                </div>
            );
        }else{
            return <div>
                Loading ...
            </div>
        }
        
    }
}
export default Animal;