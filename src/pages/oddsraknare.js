import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är oddsräknare?" />
    <div className="content-header">
      <h1>Vad är oddsräknare?</h1>
      <p>En räknare som hjälper ta reda på vinst marginal eller annan lämplig information.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
