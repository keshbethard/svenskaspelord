import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Play'n GO?" />
    <div className="content-header">
      <h1>Vad är Play'n GO?</h1>
      <p>Ett svensk företag från Växjö som framförallt utvecklar casinospel.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
