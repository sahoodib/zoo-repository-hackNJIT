import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <nav className="container-fluid"> 
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/bookings">Bookings</Link></li>
                            </ul>
                        </div>
                        <div id="logo-container" className="col-3 nav-brand text-center">
                            <div><img src={this.props.logo}/></div>
                            <h1>Zoo World</h1>
                        </div>
                        <div className="col">
                            <ul>
                                <li><Link to="/animals">Animals</Link></li>
                                <li><Link to="/restaurants">Restaurants</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;