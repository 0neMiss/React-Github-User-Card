import React from 'react';
import './App.css';
import Card from './components/Card';
import CardList from './components/CardList';
/*
to do:
pass the data from api down through props to the components
make a fetch request for the data from my followers
make a map function in cardlist to pass for each iteration of followers
style and destroyj


*/
class App extends React.Component {
  state = {
    followers: [],
    login: "",
    avatar_url: "",
    name: ""
  };

  componentDidMount() {

    fetch("https://api.github.com/users/0neMiss")
      .then(response => response.json())
      .then(response => {
        console.log(response.avatar_url);
         this.setState({
           login: response.login,
           avatar_url: response.avatar_url,
           name: response.name
         })

       })
      .catch(err => console.log(err));
    fetch('https://api.github.com/users/0neMiss/followers')
    .then(response => response.json())
    .then(response =>{
      this.setState({
        followers: response
      })
      console.log(`state ${this.state.followers[1].login}`);
    })

  }



  render(){
    return (
      <div className="App">
          <Card login = {this.state.login} avatar_url = {this.state.avatar_url} name = {this.state.name}/>
          <CardList followers = {this.state.followers}/>
      </div>
    );
  }
}

export default App;
