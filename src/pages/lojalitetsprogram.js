import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder lojalitetsprogram?" />
    <div className="content-header">
      <h1>Vad betyder lojalitetsprogram?</h1>
      <p>Spelbolagens sätt att visa uppskattning till återkommande spelare.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
