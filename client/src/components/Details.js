import React, { Component } from "react";

const mainDetails = ['artistName','releaseDate', 'country', 'primaryGenreName ' ];

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
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(item));
    return (
      <div>
        <ul>
          { mainDetails.map((mainDetail) => detail(mainDetail, item[mainDetail])) }
        </ul>
        <h5>
          {"All video's details you can download "}
          <a href={dataStr} download={"details.txt"} >
            here
          </a>
        </h5>

      </div>
    )
  }
}

export default Details;



