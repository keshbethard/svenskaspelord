import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder videopoker?" />
    <div className="content-header">
      <h1>Vad betyder videopoker?</h1>
      <p>En kombinationsspel av poker och spelautomater.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
