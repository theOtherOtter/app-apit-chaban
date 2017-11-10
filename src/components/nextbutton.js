import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nextbutton extends Component {
  constructor(props) {
      super(props);
      this.state = {
          id: 1,
      }
  }

  render() {
    let id = this.props.id;
    id = parseInt(id,10)+1;
    const maxDataLength = this.props.maxDataLength;
    return (
        <div>
            {id <= maxDataLength ?
                <div>
                    <Link to={`/${id}`} refresh="true">Next</Link>
                </div>
                :
                <div>
                    <p>Next</p>
                </div>
            }
        </div>
    )
  }
}

export default Nextbutton;
