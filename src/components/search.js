import React, { Component } from 'react';
import moment from 'moment'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate : "",
            endDate : "",
        }
    }

    handleChange = (event) => {
        const eventToMoment = moment(event.target.value, "YYYY-MM-DD").format("DD/MM/YY");
        event.target.name === "startDate" ? 
            this.setState({startDate: eventToMoment}) :
                this.setState({endDate: eventToMoment});
        this.props.filterByDate(this.state.startDate, this.state.endDate);
    }

  render() {
    const todayDate = moment().format("YYYY-MM-DD");
    const tomorrowDate = moment().add(1, 'day').format("YYYY-MM-DD");
    return (
      <div>
            <label htmlFor="from">From : </label>
            <input type="date" defaultValue={todayDate} min={todayDate} name="startDate" onChange={this.handleChange}/>
            <label htmlFor="to">To : </label>
            <input type="date" defaultValue={tomorrowDate} min={todayDate} name="endDate" onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Search;
