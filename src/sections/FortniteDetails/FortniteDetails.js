import "./FortniteDetails.css";

import details_01 from "../../assets/images/details-01.jpg";
import details_02 from "../../assets/images/details-02.jpg";
import details_03 from "../../assets/images/details-03.jpg";
import feature_left from "../../assets/images/feature-left.jpg";
import feature_right from "../../assets/images/feature-right.jpg";

import { FaStar, FaPlay } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { MdStorage } from "react-icons/md";
import { FaGamepad } from "react-icons/fa6";

const FortniteDetails = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="feature-banner header-text">
            <div className="row">
              <div className="col-lg-4">
                <img
                  src={feature_left}
                  alt="feature_left"
                  style={{ "borderRadius": "23px" }}
                />
              </div>
              <div className="col-lg-8">
                <div className="thumb">
                  <img
                    src={feature_right}
                    alt="feature_right"
                    style={{ "borderRadius": "23px" }}
                  />
                  <a
                    href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                    target="_blank"
                  >
                    <i>
                      <FaPlay />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="game-details">
        <div className="row">
          <div className="col-lg-12">
            <h2>Fortnite Details</h2>
          </div>
          <div className="col-lg-12">
            <div className="content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="left-info">
                    <div className="left">
                      <h4>Fortnite</h4>
                      <span>Sandbox</span>
                    </div>
                    <ul>
                      <li>
                        <i>
                          <FaStar />
                        </i>{" "}
                        4.8
                      </li>
                      <li>
                        <i>
                          <FaDownload />
                        </i>{" "}
                        2.3M
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-info">
                    <ul>
                      <li>
                        <i>
                          <FaStar />
                        </i>{" "}
                        4.8
                      </li>
                      <li>
                        <i>
                          <FaDownload />
                        </i>{" "}
                        2.3M
                      </li>
                      <li>
                        <i>
                          <MdStorage />
                        </i>{" "}
                        36GB
                      </li>
                      <li>
                        <i>
                          <FaGamepad />
                        </i>{" "}
                        Action
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img
                    src={details_01}
                    alt="details_01"
                    style={{ "borderRadius": "23px", "marginBottom": "30px" }}
                  />
                </div>
                <div className="col-lg-4">
                  <img
                    src={details_02}
                    alt="details_02"
                    style={{ "borderRadius": "23px", "marginBottom": "30px" }}
                  />
                </div>
                <div className="col-lg-4">
                  <img
                    src={details_03}
                    alt="details_03"
                    style={{ "borderRadius": "23px", "marginBottom": "30px" }}
                  />
                </div>
                <div className="col-lg-12">
                  <p>
                    Fortnite is an online video game and game platform developed
                    by Epic Games and released in 2017. It is available in six
                    distinct game mode versions that otherwise share the same
                    general gameplay and game engine: Fortnite Battle Royale, a
                    free-to-play battle royale game in which up to 100 players
                    fight to be the last person standing; Fortnite: Save the
                    World, a cooperative hybrid tower defense-shooter and
                    survival game in which up to four players fight off
                    zombie-like creatures and defend objects with traps and
                    fortifications they can build; Fortnite Creative, in which
                    players are given complete freedom to create worlds and
                    battle arenas; Lego Fortnite, an open world survival game;
                    Rocket Racing, a racing game; and Fortnite Festival, a
                    rhythm game.
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="main-border-button">
                    <a href="https://www.fortnite.com/download?lang=en-US">Download Fortnite Now!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FortniteDetails;
