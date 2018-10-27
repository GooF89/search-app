import React, { Component } from "react";

const detail = (key, value) => {
  if (key !== 'trackName') {
    return (
      <li>
        {key} : {value}
      </li>
    )
  }
};

class Details extends Component {

  render() {
    const item = this.props.item;
    return (
      <div>
        <ul>
          {Object.keys(item).map((key) => detail(key, item[key] ))}
        </ul>
      </div>
    )
  }
}

export default Details;
