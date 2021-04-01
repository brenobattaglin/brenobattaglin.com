import PropTypes from "prop-types";
import React from "react";
import pic01 from "../images/pic01.jpg";
import pic02 from "../images/pic02.jpg";
import pic03 from "../images/pic03.jpg";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa
            purus, dignissim id sollicitudin at, sodales eget ante. Nulla non
            nunc porttitor, tincidunt mi vitae, gravida magna. Ut gravida sem
            nec lectus congue vehicula. Sed laoreet lacus vel metus gravida, id
            porttitor tortor rhoncus. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Proin sed dui sed
            purus dapibus feugiat. Donec lacinia aliquet eros at pretium.
            Quisque vestibulum odio ut mi malesuada convallis. Cras sodales
            lorem et nibh suscipit dignissim. Nulla mattis augue eu tristique
            dignissim. Quisque vulputate nibh ut ante aliquam iaculis. Nullam
            mollis magna in porttitor mollis. Ut semper feugiat ullamcorper.
            Mauris quis tortor at nulla aliquet scelerisque. In elementum metus
            a mollis ultrices. Sed ac rutrum tortor, sed pellentesque dui.
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
