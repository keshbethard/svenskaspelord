import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder liveodds?" />
    <div className="content-header">
      <h1>Vad betyder liveodds?</h1>
      <p>Odds som förändras när matchen har börjat.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
