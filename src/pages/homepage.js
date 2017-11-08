import React, { Component } from 'react';
import './../styles/App.css';
import List from './../components/list.js';
import {ProgressBar} from 'react-materialize';


class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
    //.catch(e => )
  }
  render() {
    return (
      <div>
        <h2>Prochaines fermetures</h2>
        {this.state.data.length === 0 ?
          <ProgressBar/> :
          <List data={this.state.data}/>
        }
      </div>
    )
  }
}

export default Homepage;
