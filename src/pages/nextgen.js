import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är NextGen?" />
    <div className="content-header">
      <h1>Vad är NextGen?</h1>
      <p>NextGen är en casino spelutvecklare som har funnits sedan år 1999. Känd för spel som The Mask, 300 Shields, Wild Plunder och La Bomba.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
