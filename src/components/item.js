import React, { Component } from 'react';
import {Card} from 'react-materialize';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        }
    }

  render() {
    const data = this.props.data;
    return (
      <div>
         <Card title={data.date} className="singleCard">
            {data.totale === true &&
                <div><img src={require('./../images/total.svg.png')} alt="Total closure"/></div>
            }
            
            <div>From {data.start}</div>
            <div>To {data.end}</div>
            <div>
                Closing reason : {data.reason}
            </div>
            <a target='_blank' href={data.link}>Go to Bordeaux website</a>
        </Card>
      </div>
    )
  }
}

export default Item;
