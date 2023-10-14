import React from "react";
import styled from "styled-components";
import {
  AiFillContacts,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import logo from "../assets/SaajLogo.png";
function Navbar() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <nav className="navbar">
            <div className="topNavBar">
              <div className="left">
                <AiFillContacts className="contactIcon" />
                <span>+91 9170004721</span>
              </div>
              <div className="mid">
                <span>
                  FLAT 10% + EXTRA 30% OFF on all orders. Free Shipping
                </span>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <a href="#">
                      <AiOutlineUser />
                      MY ACCOUNT
                    </a>
                  </li>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Cart</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mainNavBar"></div>
          </nav>
        </div>
      </Wrapper>
      <MainNavigation>
        <div className="container">
          <div className="left">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="mid">
            <ul>
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <AiOutlineSearch />
            <AiOutlineHeart />
            <AiOutlineShoppingCart />
          </div>
        </div>
      </MainNavigation>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  background: var(--bgcolor);
  .container {
    svg {
      width: 20px;
      height: 20px;
      border-radius: 8px;
      background: var(--btnColor);
      color: var(--titleColor);
    }
    .left {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }
    .mid {
      color: red;
      text-decoration: underline;
      font-weight: 600;
      letter-spacing: 2px;
      cursor: pointer;
    }
    .topNavBar,
    .right ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .right ul {
      li {
        padding: 10px 8px;
        transition: all 0.3s linear;
        &:hover {
          background: var(--hoverColor);
          border-radius: 4px;
        }
      }
      li a {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }
    }
  }
`;

const MainNavigation = styled.section`
  background: var(--btnColor);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      img {
        width: 110px;
        height: 50px;
        object-fit: cover;
      }
    }
    .mid {
      ul {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 500;
        li {
          padding: 22px 16px;
          transition: all 0.3s linear;
        }
        li:hover {
          background: var(--hoverColor);
          border-radius: 4px;
        }
      }
    }
    .right {
      color: #fff;
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 24px;
      svg {
        cursor: pointer;
      }
    }
  }
`;
export default Navbar;
