import React from 'react';
import './Components.scss';

import Diseases from './Diseases/Diseases';

class Components extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            number:0,
            type:'none',
            willKill:false,
            diseases:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmittion = this.handleSubmittion.bind(this);
    }
    handleChange(event){
        let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        let name = event.target.name;

        this.setState({
            [name]:value
        });
    }
    handleSubmittion(event){
        event.preventDefault();
        let d = this.state.diseases;
        d.push({
            id:this.state.diseases.length,
            number : this.state.number,
            type:this.state.type,
            willKill:this.state.willKill
        });
        this.setState({
            diseases:d
        });
    }
    render(){
        return (<div>
                <div>
                    <Diseases diseases={this.state.diseases} />
                </div>
                <form onSubmit={this.handleSubmittion}>
                    <h1>New Disease Information</h1>
                    <label>
                        Number of units :
                        <input name="number" type="number" value={this.state.number} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Type : 
                        <select name="type" value={this.state.type} onChange={this.handleChange}>
                            <option value="none">Unknown</option>
                            <option value="A">Virus - Limited Effect</option>
                            <option value="B">Virus - Vast Effect</option>
                            <option value="C">Fungal Contamination</option>
                            <option value="D">Bacterial Plauge</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Can Kill? 
                        <input name="willKill" type="checkbox" value={this.state.willKill} onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Submit A New Disease</button>
                </form>
            </div>);
    }
}

export default Components;