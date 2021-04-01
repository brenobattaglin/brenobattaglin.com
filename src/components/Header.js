import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Breno Battaglin</h1>
        <p>
          Computer scientist - Mobile/Full stack developer - Minimalist{' '}
          <br />
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <a href="mailto:breno.battaglin@icloud.com">
            <button>Contact me</button>
          </a>
        </li>
        <li>
          <a href="https://github.com/brenobattaglin">
            <button>GitHub</button>
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('linktree')
            }}
          >
            Linktree
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
