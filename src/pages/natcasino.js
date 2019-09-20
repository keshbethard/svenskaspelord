import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder nätcasino?" />
    <div className="content-header">
      <h1>Vad betyder nätcasino?</h1>
      <p>Annat ord för <Link to="/casino-online">casino online</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
