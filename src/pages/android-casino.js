import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder Android casino?" />
    <div className="content-header">
      <h1>Vad betyder Android casino?</h1>
      <p>Casino som fungerar på Android smartphones.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
