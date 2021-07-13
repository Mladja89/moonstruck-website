import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import facebookO from "../img/social/facebook-orange.svg";
import instagramO from "../img/social/instagram-orange.svg";
import twitterO from "../img/social/twitter-orange.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="footer-wrapper">
          <div className="title-wrapper">
            <h2>
              <span>contact </span>
            </h2>
          </div>
          <div className="content has-text-centered has-background-black has-text-white-ter">
            <div className="container has-background-black has-text-white-ter">
              <div
                style={{ maxWidth: "100vw" }}
                className="columns contact-content"
              >
                <div className="column is-4 mail">
                  <a href="mailto: office@moonstruck.io">
                    office@moonstruck.io
                  </a>
                </div>
                {/* <div className="column is-4">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link className="navbar-item" to="/blog">
                          Latest Stories
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div> */}
                <div className="column is-4 social">
                  <a title="facebook" href="https://facebook.com">
                    <img
                      src={facebook}
                      alt="Facebook"
                      // style={{ width: "1em", height: "1em" }}
                    />
                    <img
                      src={facebookO}
                      alt="Facebook"
                      // style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="twitter" href="https://twitter.com">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      // style={{ width: "1em", height: "1em" }}
                    />
                    <img
                      className="fas fa-lg"
                      src={twitterO}
                      alt="Twitter"
                      // style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      // style={{ width: "1em", height: "1em" }}
                    />
                    <img
                      src={instagramO}
                      alt="Instagram"
                      // style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
