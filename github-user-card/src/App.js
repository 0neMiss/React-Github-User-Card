import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList'
/*
to do:
pass the data from api down through props to the components
make a fetch request for the data from my followers
make a map function in cardlist to pass for each iteration of followers
style and destroy


*/
class App extends React.Component {
  state = {
          login: "",
          avatar_url: "",
          name: ""
  };

  componentDidMount() {
    fetch("https://api.github.com/users/0neMiss")
      .then(res => res.json())
      .then(data => {
        console.log(data)
         this.setState({
           login: data.login,
           avatar_url: data.avatar_url,
           name: data.name
         })
         console.log(`state ${this.state.login}`);
       })
      .catch(err => console.log(err));


  }



  render(){
    return (
      <div className="App">
          <CardList/>
      </div>
    );
  }
}

export default App;
