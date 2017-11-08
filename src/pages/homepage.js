import React, { Component } from 'react';
import './../styles/App.css';
import List from './../components/list.js';
import {ProgressBar} from 'react-materialize';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:1337')
    .then((res) => { 
      console.log('Server response', res);
      return res.json();
    })
    .then(jsonData => {
      console.log('DATA FROM API', jsonData);
      this.setState({
        data: jsonData,
      })
    })
    .catch(err => {
      const errStatus = err.response ? err.response.status : 500;
      if (errStatus === 404){
        this.setState({
          error: true,
        });
        alert('404');
      } else {
        this.setState({
          error: true,
        });
        alert("ERROR " + errStatus);
      }
    });
  }
  render() {
    return (
      <div>
        <h2>Prochaines fermetures</h2>
        {this.state.data.length === 0 && this.state.error === false ?
          <ProgressBar/> :
          <List data={this.state.data}/>
        }
        {this.state.error === true ?
          <p id="errorMessage">An error occured, try to refresh the page</p> :
          <List data={this.state.data}/>
        }
      </div>
    )
  }
}

export default Homepage;
