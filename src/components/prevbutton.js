import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Prevbutton extends Component {
  constructor(props) {
      super(props);
      this.state = {
          id: 1,
      }
  }

  render() {
    let id = this.props.id;
    if(id>=1)
    {
        id = id - 1;
    }
    return (
        <div>
            {id >= 1 ?
                <div>
                    <Link to={`/${id}`} refresh="true">Previous</Link>
                </div>
                :
                <div>
                    <p>Previous</p>
                </div>
            }
        </div>
    )
  }
}

export default Prevbutton;
