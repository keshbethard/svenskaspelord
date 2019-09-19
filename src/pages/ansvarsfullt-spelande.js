import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder ansvarsfullt spelande?" />
    <div className="content-header">
      <h1>Vad betyder ansvarsfullt spelande?</h1>
      <p>En insats av <Link to="/spelbolag">spelbolagen</Link> och andra myndigheterna för att minska spelberoendet och framföra ett hälsosammare spelande.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
