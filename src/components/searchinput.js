import React, { Component } from 'react';
import moment from 'moment'

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

  render() {
    const todayDate = moment().format("YYYY-MM-DD");
    const tomorrowDate = moment().add(1, 'day').format("YYYY-MM-DD");
    return (
      <div>
            <label htmlFor="from">From : </label>
            <input type="date" defaultValue={todayDate} min={todayDate} name="startDate" onChange={this.props.onChange}/>
            <label htmlFor="to">To : </label>
            <input type="date" min={todayDate} name="endDate" onChange={this.props.onChange}/>
      </div>
    )
  }
}

export default SearchInput;
