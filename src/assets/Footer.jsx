import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Something</h1>
          <h2>Contact</h2>
          <address>
            5534 Somewhere In. The World 22193-10212
            <br />
            <a className="footer__btn" href="mailto:example@gmail.com">
              Email Us
            </a>
          </address>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>
              <li>
                <a href="#">Print</a>
              </li>
              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>
          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Technology</h2>
            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Hardware Design</a>
              </li>
              <li>
                <a href="#">Software Design</a>
              </li>
              <li>
                <a href="#">Digital Signage</a>
              </li>
              <li>
                <a href="#">Automation</a>
              </li>
              <li>
                <a href="#">Artificial Intelligence</a>
              </li>
              <li>
                <a href="#">IoT</a>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="legal">
          <p>© 2019 Something. All rights reserved.</p>
          <div className="legal__links">
            <span>
              Made with <span className="heart">♥</span> remotely from Anywhere
            </span>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`


  .footer {
    /* position: sticky; */
  left: 0;
  bottom: 0;
    display: flex;
    flex-flow: row wrap;
    padding: 30px 30px 20px 60px;
    color: #e4e4e4;
    background-color: black;
    border-top: 1px solid #e5e5e5;
  }

  .footer > * {
    flex: 1 100%;
  }

  .footer__addr {
    margin-right: 1.25em;
    margin-bottom: 2em;
  }

  .footer__logo {
    font-family: "Pacifico", cursive;
    font-weight: 400;
    text-transform: lowercase;
    font-size: 1.5rem;
  }

  .footer__addr h2 {
    margin-top: 1.3em;
    font-size: 15px;
    font-weight: 400;
  }

  .nav__title {
    font-weight: 400;
    font-size: 15px;
  }

  .footer address {
    font-style: normal;
    color: #999;
  }

  .footer__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    max-width: max-content;
    background-color: rgb(33, 33, 33, 0.07);
    border-radius: 100px;
    color: #8e8080;
    line-height: 0;
    margin: 0.6em 0;
    font-size: 1rem;
    padding: 0 1.3em;
  }

  .footer ul {
    list-style: none;
    padding-left: 0;
  }

  .footer li {
    line-height: 2em;
  }

  .footer a {
    text-decoration: none;
  }

  .footer__nav {
    display: flex;
    flex-flow: row wrap;
  }

  .footer__nav > * {
    flex: 1 50%;
    margin-right: 1.25em;
  }

  .nav__ul a {
    color: #999;
  }

  .nav__ul--extra {
    column-count: 2;
    column-gap: 1.25em;
  }

  .legal {
    display: flex;
    flex-wrap: wrap;
    color: #999;
  }

  .legal__links {
    display: flex;
    align-items: center;
  }

  .heart {
    color: #2f2f2f;
  }

  @media screen and (min-width: 24.375em) {
    .legal .legal__links {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 40.375em) {
    .footer__nav > * {
      flex: 1;
    }

    .nav__item--extra {
      flex-grow: 2;
    }

    .footer__addr {
      flex: 1 0px;
    }

    .footer__nav {
      flex: 2 0px;
    }
  }
`;

export default Footer;
