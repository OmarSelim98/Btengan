import React from 'react';
import logo from './logo.svg';
import './app.scss';
import Components from './Components/Components';
class App extends React.Component {
  timerID = 0;
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn : false,
      userData:{
        name:"Omar"
      },
      items:[
        {
          id:0,
          value:"A"
        }
        ,{
          id:1,
          value:"B"
        },
        {
          id:2,
          value:"C"
        }
      ],
      newItem:{
        id:-1,
        value:''
      }
    };
    Greeting = Greeting.bind(this);
    LoginButton = LoginButton.bind(this);
    this.changeNewItem = this.changeNewItem.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }
  changeNewItem(event){
    this.setState({
      newItem:{value: event.target.value}
    });
    console.log(event.target.value);
  }
  addNewItem(){
    let newItems = this.state.items;
    newItems.push({
      id:this.state.items.length,
      value:this.state.newItem.value
    });
    this.setState({
      items:newItems,
      newItem:{
        value:''
      }
    })
  }
  render(){
    return (
     <div>
      <Greeting />
      <LoginButton />
      {this.state.isLoggedIn && <List items={this.state.items}/> }
      <div>
        <label>
          Add Item :
          <input value={this.state.newItem.value} onChange={this.changeNewItem}/>
          
        </label>
        <button onClick={this.addNewItem}>Add Item</button>
      </div>
      <Components />
     </div>
     
    );
  }
}
function List(props){
  let items = props.items;
  return(
    <ul>
      {
        items.map((item)=>{
          return <ListItem key={item.id} value={item.value} />
        })
      }
      
    </ul>
  );
}
function ListItem(props){
  return (<li>{props.value}</li>);
}
function LoginButton(props){
  let login = ()=>{
    this.setState({
      isLoggedIn:true
    });
  };
  let logout = ()=>{
    this.setState({
      isLoggedIn:false
    });
  };
  return(<button onClick={this.state.isLoggedIn ? logout : login}>{this.state.isLoggedIn ? "Logout" : "Login"}</button>);
}
function Greeting(props){
  if(this.state.isLoggedIn == true){
    return <h1>Hello ,{this.state.userData.name} !</h1>;
  }
  return (<h1>Hello, Guest!</h1>);
}

export default App;
