import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Spelinspektionen?" />
    <div className="content-header">
      <h1>Vad är Spelinspektionen?</h1>
      <p>Sveriges förvaltningsmyndighet för frågor om spel och lotterier.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
