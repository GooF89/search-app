import React, {Component} from 'react';
import axios from 'axios';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import Details from "./Details";

class Content extends Component {

  state = {
    item: {}
  };

  componentDidMount() {
    const baseUrl = "https://itunes.apple.com/lookup?";
    const id = "id=" + this.props.match.params.id;
    const url = baseUrl + id;
    console.log(url);
    axios.get(url)
      .then(res => {
        this.setState({item: res.data.results[0]});
      });
  }

  render() {
    const item = this.state.item;
    return (
      <div style={{
      }}>
        <div style={{
          float: 'left',
          width: '50%',
          padding: 5,
          height: 300
        }}>
          <Player
            src={item.previewUrl}
          />
        </div>
        <div style={{
          float: 'left',
          width: '45%',
          padding: 10,
          height: 300
        }}>
          <h1>{item.trackName}</h1>
          <h4>Video's details:</h4>
          <Details item={item}/>
        </div>
      </div>

    )
  }
}


export default Content;
