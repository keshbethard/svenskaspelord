import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Three Card Poker?" />
    <div className="content-header">
      <h1>Vad är Three Card Poker?</h1>
      <p>Känd bordspel baserad på poker.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
