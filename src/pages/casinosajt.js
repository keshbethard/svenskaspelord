import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är casinosajt?" />
    <div className="content-header">
      <h1>Vad är casinosajt?</h1>
      <p>En webbsida som erbjuder spel om pengar.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
