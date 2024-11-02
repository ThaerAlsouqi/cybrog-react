import "./FeaturedGamesItem.css"

import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const FeaturedGamesItem = (props) => {
  return (
  <div className="item">
    <div className="thumb">
      <img src={props.image} alt="Featured_01" />
      <div className="hover-effect">
        <h6>
          <a href={props.url} style={{'color':'#ec6090'}} target="_blank">
          Twitch
          </a>
        </h6>
      </div>
    </div>
    <h4>
      {props.name}
      <br />
      <span>{props.downloads}</span>
    </h4>
    <ul>
      <li>
        <i><FaStar/></i> {props.rate}
      </li>
      <li>
        <i><FaDownload/></i> {props.downloads}
      </li>
    </ul>
  </div>
  )
}

export default FeaturedGamesItem
