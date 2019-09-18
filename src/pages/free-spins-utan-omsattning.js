import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder free spins utan omsättning?" />
    <div className="content-header">
      <h1>Vad betyder free spins utan omsättning?</h1>
      <p>Free spins som du kan ta ut summan du vinner direkt efter du har spelat klart.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
