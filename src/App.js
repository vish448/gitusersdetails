import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state = {
   card : [
           {
            name : "Vishang Soni",
            avatar_url : "https://avatars1.githubusercontent.com/u/1841822?v=4",
            company : "studio48"
            },
            {
             name : "May Lou",
             avatar_url : "https://avatars1.githubusercontent.com/u/1044196?v=4",
             company : "Code drops"
             }
            ]
  };

   render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Add User Details for github users</h2>
        </div>
        <Cardlist cards={this.state.card} />
      </div>
    );
  }

}


const Card = (props) => {
 return(
   <div style={{marginBottom:10}}>
    <img width="150" src={props.avatar_url} />
    <div style = {{display: 'inline-block',marginLeft:10}}>
      <div style = {{fontSize:'2em', fontWeight:'bold'}}>{props.name}</div>
      <div>{props.company}</div>
      </div>
   </div> 
 )
};


const Cardlist = (props) => {
  return(
  <div>
   {props.cards.map(card => <Card {...card} />)}
   </div>
  );
}

export default App;