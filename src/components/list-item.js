import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Card} from 'react-materialize';

class ListItem extends Component {

  render() {
    return (
      <div>
         <Card title={this.props.date}>
            <div>{this.props.start}</div>
            <div>{this.props.end}</div>
            <div>
              <Link to={`/${this.props.id}`}>Plus de détails</Link>
            </div>
        </Card>
      </div>
    )
  }
}

export default ListItem;
