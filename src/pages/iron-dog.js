import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Iron Dog?" />
    <div className="content-header">
      <h1>Vad är Iron Dog?</h1>
      <p>En spelutvecklare som har sin bas i England. Känd för spel som Blood Queen, Wai Kiki, Viking Wilds, Rainbow Wilds och Richie in Vegas.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
