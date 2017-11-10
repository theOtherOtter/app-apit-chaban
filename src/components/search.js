import React, { Component } from 'react';
import moment from 'moment'
import SearchInput from './searchinput'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate : "",
            endDate : "",
        }
    }

    handleChange = (event) => {
        const eventToMoment = moment(event.target.value, "YYYY-MM-DD").format("DD-MM-YY");
        event.target.name === "startDate" ? 
            this.state.startDate = eventToMoment :
                this.state.endDate = eventToMoment;
        this.forceUpdate();
        this.props.filterByDate(this.state.startDate, this.state.endDate);
    }

  render() {
    return (
      <div>
            <SearchInput onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Search;
