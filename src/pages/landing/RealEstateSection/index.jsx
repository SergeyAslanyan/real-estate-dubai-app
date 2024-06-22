import { useEffect, useState } from "react";
import "./styles.scss";
import logo from "../../../../public/images/logo-png.png";
import group from "../../../icons/group.svg"
import menu from "../../../icons/menu.svg"
import contact from "../../../icons/contact-us.svg"
import arrow from "../../../icons/arrow-45.svg"
import heart from "../../../icons/heart.svg"
import home from "../../../icons/home.svg"
import download from "../../../icons/download.svg"

const RealEstateSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="real-estate-wrapper">
      <div className="left-box">
        <div className="left-box-header">
          <div className={`icon-box ${animate ? "animate" : ""}`}>
            <img src={logo} alt=""></img>
          </div>
          <div className="menu-items-box">
            <div className={`menu-item icon-box ${animate ? "animate" : ""}`}>
              <img src={group} alt="Home Icon" />
            </div>
            <div className={`menu-item icon-box ${animate ? "animate" : ""}`}>
              <img src={menu} alt="Home Icon" />
            </div>
          </div>
        </div>
        <div className={`left-box-content-wrapper ${animate ? "animate" : ""}`}>
          <div className="left-box-content">
            <span className="left-box-content-title">Building Your Dreams</span>
            <p className="left-box-content-text">Real Estate in Dubai:</p>
            <p className="left-box-content-text">Ideal for Living and</p>
            <p className="left-box-content-text">Investing</p>
          </div>
        </div>
        <div className="left-box-footer">
          <div className={`contact-us-wrapper ${animate ? "animate" : ""}`}>
            <div className="fake-icon-box-wrapper">
              <div className="phone-icon-box icon-box">
                <img src={contact} />
              </div>
            </div>
            <button className="contact-us-button">Contact Us Now</button>
          </div>
          <div className="explore-all-properties-box">
            <div className="arrow-45-box">
              <img src={arrow}></img>
            </div>
            <span className="explore-all-properties-text">
              Explore All Our Properties
            </span>
            <div className="explore-all-properties-image-box"></div>
          </div>
        </div>
      </div>
      <div className={`right-box ${animate ? "animate" : ""}`}>
        <div className="right-box-header">
          <div className="right-box-texts">
            <p>More than 1500 real</p>
            <p>estate properties</p>
            {/* More than 1500 real estate properties */}
          </div>
          <div className="right-box-texts">
            <p>From $145,000 with a</p>
            <p>yield of 10% per annum</p>
            {/* From $145,000 with a yield of 10% per annum */}
          </div>
          <div className="right-box-icons-wrapper">
            <div className="heart-icon-box">
              <img src={heart} />
            </div>
            <div className="home-icon-box">
              <img src={home} />
            </div>
          </div>
        </div>
        <div className="catalog-download-box-wrapper">
          <div className="catalog-download-box">
            <span className="catalog-download-text">catalog download </span>

            <div className="download-icon-box">
              <img src={download} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateSection;
