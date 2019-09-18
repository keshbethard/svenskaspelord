import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logotype from "../../images/svenska-spel-ord.png"

const Header = ({ siteTitle }) => (
  <header>
      <Link to="/">
        <img src={logotype} title="Svenska Spel Ord" alt="Svenska Spel Ord" />
      </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
