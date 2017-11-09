import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate = new Date(),
            endDate = new Date(),
        }
    }

  render() {
    const todayDate = new Date().toISOString().substr(0, 10);
    const tomorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getFullYear() + '-' + (parseInt(new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getMonth(),10)+1).toString() + '-' + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getDate(); 
    return (
      <div>
            <label htmlFor="from">From : </label>
            <input type="date" defaultValue={todayDate} min={todayDate} name="from" />
            <label htmlFor="to">To : </label>
            <input type="date" defaultValue={tomorrowDate} min={todayDate} name="to" />
      </div>
    )
  }
}

export default Search;
