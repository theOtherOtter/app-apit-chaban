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
      nothingFound: false,
      incorrectDates: false,
    }
  }

  throwError(err) {
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
  }

  getClosureList() {
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
      this.throwError(err);
    })
  }

  getClosureListDateFiltered(startDate, endDate) {
    this.setState({
      data: [],
    })
    if(endDate === "")
    {
      fetch('http://localhost:1337/?from='+startDate)
      .then((res) => { 
        console.log('Server response', res);
        return res.json();
      })
      .then(jsonData => {
        console.log('DATA FROM API', jsonData);
        this.setState({
          data: jsonData,
        });
        if(jsonData.length === 0){
          this.setState({
            nothingFound: true,
          });
        }
      })
      .catch(err => {
        this.setState({
          error: true,
        });
        this.throwError(err);
      });
    }
    else if(startDate === "")
    {
      fetch('http://localhost:1337/?to='+endDate)
      .then((res) => { 
        console.log('Server response', res);
        return res.json();
      })
      .then(jsonData => {
        console.log('DATA FROM API', jsonData);
        this.setState({
          data: jsonData,
        });
        if(jsonData.length === 0){
          this.setState({
            nothingFound: true,
          });
        }
      })
      .catch(err => {
        this.setState({
          error: true,
        });
        this.throwError(err);
      });
    }
    else
    {
      if(endDate < startDate)
      {
        this.setState({
          incorrectDates: true,
        });
      }
      else
      {
        fetch('http://localhost:1337/?from='+startDate+'&to='+endDate)
        .then((res) => { 
          console.log('Server response', res);
          return res.json();
        })
        .then(jsonData => {
          console.log('DATA FROM API', jsonData);
          this.setState({
            data: jsonData,
          });
          if(jsonData.length === 0){
            this.setState({
              nothingFound: true,
            });
          }
        })
        .catch(err => {
          this.setState({
            error: true,
          });
          this.throwError(err);
        });
      }
    }
  }

  componentDidMount() {
    this.getClosureList();
  }

  render() {
    return (
      <div>
        <h2>Future closures</h2>
        <Search filterByDate={this.getClosureListDateFiltered.bind(this)}/>
        {this.state.error === true ?
          <p className="errorMessage">An error occured, try to refresh the page</p> :
            this.state.incorrectDates === true ?
              <p className="errorMessage">Dates are incorrect. Maybe start date is after end date</p> :
                this.state.nothingFound === true ?
                  <p className="errorMessage">Nothing found between these dates</p> :
                    this.state.data.length === 0 ?
                      <ProgressBar/> :
                        <List data={this.state.data}/>
        }
      </div>
    )
  }
}

export default Homepage;
