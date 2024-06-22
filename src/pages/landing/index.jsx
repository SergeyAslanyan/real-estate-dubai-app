import { useEffect, useRef, useState } from "react";
import "./styles.scss";
import RealEstateSection from "./RealEstateSection";
import InitialPaymentSection from "./InitialPaymentSection";

const Landing = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollStep, setScrollStep] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      if (scrolling) return;

      const deltaY = event.deltaY;

      const wrapper = wrapperRef.current;
      const halfViewportHeight = window.innerHeight / 2;
      const fullViewportHeight = window.innerHeight;

      let newScrollTop = wrapper.scrollTop;

      if (scrollStep === 0 && deltaY > 0) {
        newScrollTop = halfViewportHeight;
        setScrollStep(1);
      } else if (scrollStep === 1 && deltaY > 0) {
        newScrollTop = fullViewportHeight;
        setScrollStep(2);
      } else if (scrollStep === 1 && deltaY < 0) {
        newScrollTop = 0;
        setScrollStep(0);
      } else if (scrollStep === 2 && deltaY < 0) {
        newScrollTop = halfViewportHeight;
        setScrollStep(1);
      }

      setScrolling(true);
      wrapper.scrollTo({
        top: newScrollTop,
        behavior: "smooth",
      });

      setTimeout(() => {
        setScrolling(false);
      }, 1300);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [scrolling, scrollStep]);

  return (
    <div ref={wrapperRef} className="landing-wrapper">
      <div className="section">
        <RealEstateSection />
      </div>
      <div className="section">
        <InitialPaymentSection expand={scrollStep === 2} />
      </div>
    </div>
  );
};

export default Landing;
