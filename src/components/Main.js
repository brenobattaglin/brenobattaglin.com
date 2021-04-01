import PropTypes from "prop-types";
import React from "react";
import pic01 from "../images/pic01.jpg";
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      ></div>
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        <article
          id="about"
          className={`${this.props.article === "about" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
          I was born in the state of Espírito Santo, Brazil. When I was a child I always loved games and tech. 
          Growing up, I decided to do a technical programming course, and later, study computer science. 
          At this time my carrer began as a full stack web developer.
          Today I have a bachelor in computer science, and professional experience on mobile and web development.
          </p>
          {close}
        </article>

        <article
          id="linktree"
          className={`${this.props.article === "linktree" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Linktree</h2>
          <ul className="icons">
          <li>
              <a
                href="mailto:breno.battaglin@icloud.com"
                className="icon fa-inbox"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/brenobattaglin"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/brenobattaglin"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/brenobattaglin/"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/brenobattaglin"
                className="icon fa-telegram"
              >
                <span className="label">Telegram</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/brenobattaglin"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
