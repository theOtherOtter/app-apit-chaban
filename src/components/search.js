import React, { Component } from 'react';
import moment from 'moment'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate : moment(),
            endDate : moment(),
        }
    }

  render() {
    const todayDate = moment().format("YYYY-MM-DD");
    const tomorrowDate = moment().add(1, 'day').format("YYYY-MM-DD");
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
