import React, { Component } from 'react';

class MenuItem extends Component {
  render() {
    return (
      <div className="MenuItem">
        <li>
          <p>{this.props.name}</p>
        </li>
      </div>
    );
  }
}

export default MenuItem;
