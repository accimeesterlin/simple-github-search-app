import React, { Component } from 'react';
import InputSearch from './InputSearch';
import Image from './Image';




// Class Component
class App extends Component {

  state = {
    searchValue: '',
    avatar_url: '',
    bio: ''
  };



  searchUserOnGithub = (event) => {
    event.preventDefault(); // disable reload function
    const value = this.state.searchValue; // grab value

    fetch('https://api.github.com/users/' + value)
      .then((res) => res.json())
      .then((data) => {
        console.log('Data: ', data);

        this.setState({
          avatar_url: data.avatar_url,
          bio: data.bio
        }); // update my state
      })
      .catch(() => {
        alert('Error occurs');
      });
  };

  onHandleChange = (event) => {
    const value = event.target.value; // value of the input
    this.setState({ searchValue: value });
  };

  render() {

    console.log('State: ', this.state);


    // JSX
    return (
      <div>
        <h2>Welcome to my Search Github Username</h2>

        <InputSearch searchUserOnGithub={this.searchUserOnGithub} onHandleChange={this.onHandleChange} />
        <Image avatar_url={this.state.avatar_url} />

        <p>{this.state.bio}</p>
      </div>
    );
  }
}


export default App;