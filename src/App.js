import React, { Component } from 'react';
import axios from 'axios';
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
  addNewCard = (cardInfo) => {
   this.setState(prevState => ({
    card:prevState.card.concat(cardInfo) 
   }))
  };
  render(){
    return(
      <div>
        <Form onSubmit={this.addNewCard} />
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

class Form extends React.Component{
 state = {userName : ''}
 handleSubmit = (event) => {
  event.preventDefault();
  console.log("Event " + this.state.userName);
  //Making an ajax request to github api to get user details using axios js library
  axios.get(`https://api.github.com/users/${this.state.userName}`).then(resp=>{
  this.props.onSubmit(resp.data)
  })
 };
  render(){
    return(
      <form style={{marginBottom:10}} onSubmit={this.handleSubmit}>
        <input type="text" 
        onChange = {(event) => this.setState({userName:event.target.value})}
        placeholder="Enter Github Username" />
        <button type="submit" style={{marginLeft:10}}>Add a card </button>
      </form>
    )
  }
}

export default App;