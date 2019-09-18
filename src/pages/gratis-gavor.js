import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder gratis gåvor?" />
    <div className="content-header">
      <h1>Vad betyder gratis gåvor?</h1>
      <p>Spelbolag bjuder på gratis gåvor i form av pengar eller gratis snurr.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
