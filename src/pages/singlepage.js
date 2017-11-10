import React, { Component } from 'react';
import './../styles/App.css';
import Item from './../components/item.js';
import HomeButton from './../components/homebutton.js';
import PrevButton from './../components/prevbutton.js';
import NextButton from './../components/nextbutton.js';
import {ProgressBar} from 'react-materialize';

class Singlepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      maxDataLength: 0,
      error: false,
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

  componentDidMount() {
    fetch('http://localhost:1337')
    .then((res) => { 
      console.log('Server response', res);
      return res.json();
    })
    .then(jsonData => {
      console.log('DATA FROM API', jsonData);
      this.state.maxDataLength = jsonData.length,
      this.forceUpdate();
    })
    .catch(err => {
      this.setState({
        error: true,
      });
      this.throwError(err);
    })

    fetch('http://localhost:1337/'+this.props.match.params.id)
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

  componentWillReceiveProps(nextProps) {
    fetch('http://localhost:1337')
    .then((res) => { 
      console.log('Server response', res);
      return res.json();
    })
    .then(jsonData => {
      console.log('DATA FROM API', jsonData);
      this.state.maxDataLength = jsonData.length,
      this.forceUpdate();
    })
    .catch(err => {
      this.setState({
        error: true,
      });
      this.throwError(err);
    })

    this.setState({
      data: [],
    })
    fetch('http://localhost:1337/'+nextProps.match.params.id)
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

  render() {
    const {match} = this.props;
    return (
      <div>
        <HomeButton/>
        <PrevButton id={match.params.id}/>
        <NextButton id={match.params.id} maxDataLength={this.state.maxDataLength}/>
        <h2>Closure {match.params.id}</h2>
        {this.state.error === true ?
          <p id="errorMessage">An error occured, try to refresh the page</p> :
          this.state.data.length === 0 ?
            <ProgressBar/> :
              this.state.data.error === "Not found" &&
                match.params.id !== "404NotFound" ?
                  this.props.history.push('/404NotFound') :
                    <Item data={this.state.data}/>
        }
      </div>
    )
  }
}

export default Singlepage;
