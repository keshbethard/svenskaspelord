import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Starburst?" />
    <div className="content-header">
      <h1>Vad är Starburst?</h1>
      <p>En av de absolut populäraste slots av <Link to="/netent">NetEnt</Link> som erbjuds av de flesta <Link to="/casino-online">casino online</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
