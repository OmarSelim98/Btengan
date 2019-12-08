import React from 'react';
import './Diseases.scss';
import Disease from './Disease/Disease';

class Diseases extends React.Component{
    diseases = [];
    constructor(props){
        super(props);

        this.diseases = this.props.diseases;
    }

    render(){
        if(this.diseases.length === 0)
            return null;
        
        return(
                <ul>
                    {this.diseases.map((d)=>{
                        return (
                            <Disease key={d.id} disease={d} /> 
                        );
                    })}
                </ul>
        );
    }
}

export default Diseases;