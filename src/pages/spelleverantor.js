import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är spelleverantör?" />
    <div className="content-header">
      <h1>Vad är spelleverantör?</h1>
      <p>En tillverkare av casino- eller live casinospel.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
