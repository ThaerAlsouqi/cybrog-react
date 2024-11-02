import "./FeaturedGames.css"

import Fortnite from "../../assets/images/Fortnitegame.jpg"
import CSGO from "../../assets/images/CS-GO3.jpg"
import pubg from "../../assets/images/pubg.jpg"

import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { OwlCarousel } from "../../Components/index"


const FeaturedGames = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="featured-games header-text">
          <div className="heading-section">
            <h4>
              <em>Featured</em> Games
            </h4>
          </div>
            <OwlCarousel/>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="top-downloaded">
          <div className="heading-section">
            <h4>
              <em>Top</em> Downloads
            </h4>
          </div>
          <ul>
            <li>
              <img
                src={Fortnite}
                alt="Fortnite"
                className="templatemo-item"
              />
              <h4>Fortnite</h4>
              <h6>Sandbox</h6>
              <span>
                <i style={{ color: "yellow" }}><FaStar/></i> 4.9
              </span>
              <span>
                <i style={{"color" : "#ec6090"}}><FaDownload/></i> 2.2M
              </span>
              <div className="download">
                <a href="https://www.fortnite.com/download?lang=en-US" target="_blank">
                  <i style={{"color" : "#ec6090"}}><FaDownload/></i>
                </a>
              </div>
            </li>
            <li>
              <img
                src={CSGO}
                alt="CSGO"
                className="templatemo-item"
              />
              <h4>CS-GO</h4>
              <h6>Legendary</h6>
              <span>
                <i style={{ color: "yellow" }}><FaStar/></i> 4.9
              </span>
              <span>
                <i style={{"color" : "#ec6090"}}><FaDownload/></i> 2.2M
              </span>
              <div className="download">
                <a href="https://store.steampowered.com/app/730/CounterStrike_2/" target="_blank">
                  <i style={{"color" : "#ec6090"}}><FaDownload/></i>
                </a>
              </div>
            </li>
            <li>
              <img
                src={pubg}
                alt="pubg"
                className="templatemo-item"
              />
              <h4>PugG</h4>
              <h6>Battle Royale</h6>
              <span>
                <i style={{ color: "yellow" }}><FaStar/></i> 4.9
              </span>
              <span>
                <i style={{"color" : "#ec6090"}}><FaDownload/></i> 2.2M
              </span>
              <div className="download">
                <a href="https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/" target="_blank">
                  <i style={{"color" : "#ec6090"}}><FaDownload/></i>
                </a>
              </div>
            </li>
          </ul>
          <div className="text-button">
            <a href="/">View All Games</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedGames
