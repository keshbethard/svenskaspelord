import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är SBTech?" />
    <div className="content-header">
      <h1>Vad är SBTech?</h1>
      <p>Är en av de större sportsbook leverantörer.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
