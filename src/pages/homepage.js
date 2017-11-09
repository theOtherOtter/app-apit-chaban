import React, { Component } from 'react';
import './../styles/App.css';
import List from './../components/list.js';
import Search from './../components/search.js';
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
      this.setState({
        error: true,
      });
      const errStatus = err.response ? err.response.status : 500;
      switch(errStatus) {
        case 400:
          alert('400 – Bad Request');
          break;
        case 401:
          alert('401 – Authorization Required');
          break;
        case 403:
          alert('403 – Forbidden');
          break;
        case 404:
          alert('404 – Not Found');
          break;
        case 408:
          alert('408 – Request Time-Out');
          break;
        case 410:
          alert('410 – Gone');
          break;
        case 418:
          alert('418 – I\'m a teapot');
          break;
        case 500:
          alert('500 – Internal Server Error');
          break;
        case 501:
          alert('501 – Not Implemented');
          break;
        case 502:
          alert('502 – Bad Gateway');
          break;
        case 503:
          alert('503 – Service Temporarily Unavailable');
          break;
        case 504:
          alert('504 – Gateway Time-Out');
          break;
        default :
          alert('An error occured');
          break;      
      };
    })
  }
  render() {
    return (
      <div>
        <h2>Prochaines fermetures</h2>
        <Search ref="search"/>
        {this.state.error === true ?
          <p id="errorMessage">An error occured, try to refresh the page</p> :
          this.state.data.length === 0 ?
            <ProgressBar/> :
              <List data={this.state.data}/>
        }
      </div>
    )
  }
}

export default Homepage;
