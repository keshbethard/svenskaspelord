import React from "react"

import spelinspektionen from "../../images/spelinspektionen.png"
import eighteen from "../../images/18.png"

const Footer = () => (
  <footer>
    <div>
      <div className="eighteen">
        <img src={eighteen} alt="18+" title="18+" />
      </div>
      <div className="spelinspektionen">
        <a href="https://spelinspektionen.se" rel="nofollow" target="_blank"><img src={spelinspektionen} alt="Spelinspektionen" title="Spelinspektionen" /></a>
      </div>
    </div>
    <div>info@svenskaspelord.se</div>
    © {new Date().getFullYear()} Svenska Spel Ord
  </footer>
)

export default Footer
