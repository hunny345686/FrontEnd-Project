import React, { useEffect, useState, useRef } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import styled from "styled-components";
import Img1 from "../../assets/image1.avif";
import Img2 from "../../assets/img2.avif";
import Img3 from "../../assets/img3.avif";

let sliderData = [
  {
    id: 1,
    title: "Pia gets her first crown and card",
    desc: "A BDO Credit Card is a must-have for a queen",
    img: Img1,
  },

  {
    id: 2,
    title: "Pia gets her first crown and card Second",
    desc: "A BDO Credit Card is a must-have for a queen",
    img: Img2,
  },

  {
    id: 3,
    title: "Pia gets her first crown and card Third",
    desc: "A BDO Credit Card is a must-have for a queen",
    img: Img3,
  },
];
const Header = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  useEffect(() => {
    const setInerval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 7000);
    return () => clearInterval(setInerval);
  });

  return (
    <>
      <HeaderSection>
        <div className="container">
          {sliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "heardSec active" : "heardSec"}
                key={index}
              >
                {index === current && (
                  <div className="innreData">
                    <div className="left">
                      <h2>{slide.title}</h2>
                      <p>{slide.desc}</p>
                      <a href="#" className="btn">
                        Learn More
                      </a>
                    </div>
                    <div className="right">
                      <img src={slide.img} alt="" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* <div className="arrows">
            <AiFillCaretLeft className="leftArrow" onClick={scrollLeftbtn} />
            <AiFillCaretRight className="rightArrow" onClick={scrolRightbtn} />
          </div> */}
        </div>
      </HeaderSection>
    </>
  );
};

const HeaderSection = styled.section`
  .container {
    padding-top: 48px;
    padding-bottom: 48px;
    display: flex;
    .heardSec {
      opacity: 0;
      transition-duration: 1s ease;
      transform: scale(0.4);

      .innreData {
        display: flex;
        align-items: center;
        width: 100%;
        min-width: 100%;
        .left {
          flex: 1;
          h2 {
            font-size: 60px;
            font-weight: 400;
          }
          p {
            margin: 16px 0;
            font-size: 24px;
          }
        }
        .right {
          flex: 1;
          img {
            width: 500px;
            height: 500px;
            padding: 40px;
            border-radius: 60px;
          }
        }
      }
    }
    .heardSec.active {
      opacity: 1;
      transition-duration: 1s;
      transform: scale(1);
    }
    /* .arrows {
      .leftArrow,
      .rightArrow {
        position: absolute;
        font-size: 40px;
        top: 50%;
        cursor: pointer;
      }
      .leftArrow {
        left: 2px;
      }
      .rightArrow {
        right: 2px;
      }
    } */
  }
`;
export default Header;
