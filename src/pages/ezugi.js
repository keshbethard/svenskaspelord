import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Ezugi?" />
    <div className="content-header">
      <h1>Vad är Ezugi?</h1>
      <p>En spelleverantör som specialiserar sig på live casino.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
