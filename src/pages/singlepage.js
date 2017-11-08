import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../styles/App.css';
import List from './../components/list.js';
import {ProgressBar} from 'react-materialize';


class Singlepage extends Component {
  render() {
    const {match} = this.props;
    return (
      <div>
        <h1>Je suis à la page : {match.params.id}</h1>
      </div>
    )
  }
}

export default Singlepage;
