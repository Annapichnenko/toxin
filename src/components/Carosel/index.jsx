import { useState, useEffect, Children, cloneElement } from "react";
import image from "./slide1.svg";
import image1 from "./slide2.svg";
import empty from "./slider 1.svg";
import filled from "./white.svg";
import styles from "./styles.scss";
const PAGE_WIDTH = 270;
export const Carosel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [val, setVal] = useState(0);

  const offset1 = 0;
  const offset2 = -270;
  const offset3 = -540;
  const offset4 = -810;

  useEffect(() => {
    if (offset === offset1) {
      setActive1(true);
      setActive2(false);
      setActive3(false);
      setActive4(false);
    }
    if (offset === offset2) {
      setActive1(false);
      setActive2(true);
      setActive3(false);
      setActive4(false);
    }
    if (offset === offset3) {
      setActive1(false);
      setActive2(false);
      setActive3(true);
      setActive4(false);
    }
    if (offset === offset4) {
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(true);
    }
  }, [offset]);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;

      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  };
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  const bullets = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const handleClick = (number) => {
    setVal(number);
    if (val !== number) {
      if (number === 1) {
        if (offset === offset4) {
          setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH * 3;

            return Math.min(newOffset, 0);
          });
        } else if (offset === offset3) {
          setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH * 2;

            return Math.min(newOffset, 0);
          });
        } else {
          setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;

            return Math.min(newOffset, 0);
          });
        }

        setActive1(true);
        setActive2(false);
        setActive3(false);
        setActive4(false);
      }
      if (number === 2) {
        if (offset === offset4) {
          setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH * 2;

            return Math.min(newOffset, 0);
          });
        } else if (offset === offset3) {
          setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;

            return Math.min(newOffset, 0);
          });
        } else {
          setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

            return Math.max(newOffset, maxOffset);
          });
        }

        setActive1(false);
        setActive2(true);
        setActive3(false);
        setActive4(false);
      }
      if (number === 3) {
        if (offset === offset4) {
          setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;

            return Math.min(newOffset, 0);
          });
        } else if (offset === offset2) {
          setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

            return Math.max(newOffset, maxOffset);
          });
        } else {
          setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH * 2;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

            return Math.max(newOffset, maxOffset);
          });
        }

        setActive1(false);
        setActive2(false);
        setActive3(true);
        setActive4(false);
      }
      if (number === 4) {
        setOffset((currentOffset) => {
          const newOffset = currentOffset - PAGE_WIDTH * 3;
          const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

          return Math.max(newOffset, maxOffset);
        });
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(true);
      }
    }
  };

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
