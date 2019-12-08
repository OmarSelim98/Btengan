import React from 'react';
import './Disease.scss';

class Disease extends React.Component{
    disease = null;
    constructor(props){
        super(props);

        this.disease = this.props.disease;
    }
    
    render(){
        return (
        <li>
            <ul>
                <li>Number of units : {this.disease.number}</li>
                <li>Type : {this.disease.type}</li>
                <li>Can Kill : {this.disease.willKill ? "Yes" : "No"}</li>
            </ul>
        </li> 
        );
    }
}

export default Disease;