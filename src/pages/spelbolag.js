import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är spelbolag?" />
    <div className="content-header">
      <h1>Vad är spelbolag?</h1>
      <p>Ett bolag som tillhandahåller spel om pengar i form av casino och vadslagning.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
