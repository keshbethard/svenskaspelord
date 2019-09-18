import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Bonanza?" />
    <div className="content-header">
      <h1>Vad är Bonanza?</h1>
      <p>Känd slots spel från Big Time Gaming.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
