import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Big Time Gaming?" />
    <div className="content-header">
      <h1>Vad är Big Time Gaming?</h1>
      <p>En spelutvecklare inom <Link to="/casino-online">casino online</Link> med bas i Sydney, Australien.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
