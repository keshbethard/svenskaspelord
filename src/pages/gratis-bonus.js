import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är gratis bonus?" />
    <div className="content-header">
      <h1>Vad betyder gratis bonus?</h1>
      <p>Spelbolaget bjuder på gratis pengar.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
