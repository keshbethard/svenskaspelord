import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är iSoftBet?" />
    <div className="content-header">
      <h1>Vad är iSoftBet?</h1>
      <p>En spelutvecklare som står bakom titlar som Cloud Tales, Cash Camel och Happy Birds.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
