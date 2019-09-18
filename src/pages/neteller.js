import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Neteller?" />
    <div className="content-header">
      <h1>Vad är Neteller?</h1>
      <p>En virtuell plånbok som är mycket populär vid spel på nätet.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
