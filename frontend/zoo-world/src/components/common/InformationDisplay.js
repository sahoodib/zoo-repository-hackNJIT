import React from "react";
import './Common.css';

class InterfaceDisplay extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <InterfaceDisplay /> {/* <InterfaceDisplay type={data}/> */}
            </div>
        );
    }
}
export default CommentInterface;