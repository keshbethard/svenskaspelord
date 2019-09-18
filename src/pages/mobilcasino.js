import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder mobilcasino?" />
    <div className="content-header">
      <h1>Vad betyder mobilcasino?</h1>
      <p>Casino som fungerar i din smartphone.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
