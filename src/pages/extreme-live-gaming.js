import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Extreme Live Gaming?" />
    <div className="content-header">
      <h1>Vad är Extreme Live Gaming?</h1>
      <p>En live casino spelleverantör.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
