import { useCarousel } from "./hooks/useCarousel";
import image from "./slide1.svg";
import image1 from "./slide2.svg";
import empty from "./slider 1.svg";
import filled from "./white.svg";
import "./styles.scss";

export const Carosel = ({ children }) => {
  const {
    handleLeftArrowClick,
    offset,
    pages,
    handleRightArrowClick,
    handleClick,
    active1,
    active2,
    active3,
    active4,
  } = useCarousel({ children });
  return (
    <div className="main-container">
      <img src={image} className="arrow left" onClick={handleLeftArrowClick} />
      <div className="window">
        <div
          className="all-pages-container"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      <img
        src={image1}
        className="arrow right"
        onClick={handleRightArrowClick}
      />
      <div className="bullet-wrapper">
        <img
          onClick={() => handleClick(1)}
          src={active1 ? filled : empty}
          className="bullets"
        />
        <img
          onClick={() => handleClick(2)}
          src={active2 ? filled : empty}
          className="bullets"
        />
        <img
          onClick={() => handleClick(3)}
          src={active3 ? filled : empty}
          className="bullets"
        />
        <img
          onClick={() => handleClick(4)}
          src={active4 ? filled : empty}
          className="bullets"
        />
      </div>
    </div>
  );
};
