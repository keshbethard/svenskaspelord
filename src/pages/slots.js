import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder slots?" />
    <div className="content-header">
      <h1>Vad betyder slots?</h1>
      <p>Också känt som enarmade banditer, spelautomater och spelmaskiner, är olika spel som erbjuds av casino.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
