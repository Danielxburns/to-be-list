import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      currUser: ''
    };
    this.postNewUser = this.postNewUser.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  onChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  postNewUser() {
    axios({
      method: 'post',
      url: '/users',
      data: { name: this.state.name },
      dataType: 'application/json'
    })
    .then(this.getUser())
    .catch(err => console.log(err))
  }

  getUser() {
    axios.get('/users', {
      params: { name: this.state.name }
    })
    .then((user) => {
      this.setState({
        name: '',
        currUser: user.data.name
      });
    })
    .then(console.log('this.state.currUser :', this.state.currUser))
    .catch(err => console.log(err))

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit clicked! this.state :', this.state);
    this.postNewUser()
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to your ToBe List</p>
          <form>
            <label>What is your name?</label>
            <br></br>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange.bind(this)}
            />
            <input
              type="submit"
              value="submit"
              onClick={this.handleSubmit.bind(this)}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
