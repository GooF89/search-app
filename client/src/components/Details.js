import React, { Component } from "react";

const mainDetails = ['artistName','releaseDate', 'country', 'primaryGenreName' ];

const format = (key, value) => {
  let formattedKey = key.replace(/([A-Z])/g, (x,y) => {return " " + y.toLowerCase()});
  formattedKey = formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);
  let formattedValue = (key === 'releaseDate' && value) ? value.slice(0,10) : value;
  return [formattedKey, formattedValue]
};

const detail = (key, value) => {
  const [formattedKey, formattedValue] = format(key, value);
  return (
    <li key={formattedKey}>
      {formattedKey} : {formattedValue}
    </li>
  )
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
        <h6>
          {"All video's details you can download "}
          <a href={dataStr} download={"details.txt"} >
            here
          </a>
        </h6>

      </div>
    )
  }
}

export default Details;



