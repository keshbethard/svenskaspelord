import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är JFTW?" />
    <div className="content-header">
      <h1>Vad är JTTW?</h1>
      <p>Förkortning för Just For The Win, är en speltillverkare för <Link to="/casino-online">online casino</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
