/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import "./styles.scss";

const InitialPaymentSection = ({ expand }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const iconsBoxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iconsBoxRef.current) {
      observer.observe(iconsBoxRef.current);
    }

    return () => {
      if (iconsBoxRef.current) {
        observer.unobserve(iconsBoxRef.current);
      }
    };
  }, []);

  return (
    <div className="initial-payments-box-wrapper">
      <div
        ref={iconsBoxRef}
        className={`icons-box-wrapper ${
          startAnimation ? "startAnimation" : ""
        }`}
      >
        <div className="icon-box">
          <img src="src/icons/house2.svg" alt="Home Icon" />
        </div>
        <div className="icon-box">
          <img src="src/icons/key.svg" alt="Key Icon" />
        </div>
      </div>

      <div
        className={`initial-payments-box ${
          startAnimation ? "startAnimation" : ""
        } ${expand ? "expanded" : ""}`}
      >
        <video
          autoPlay
          muted
          loop
          src="public/videos/city-view-video.mp4"
          controls
          style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        />
        <div className="running-text">
          <p>Apartments with an initial payment from $25,000</p>
        </div>
      </div>
    </div>
  );
};

export default InitialPaymentSection;
