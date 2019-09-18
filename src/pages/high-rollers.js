import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder high rollers?" />
    <div className="content-header">
      <h1>Vad betyder high rollers?</h1>
      <p>Spelare som spelar för större summor och har erhållit VIP status.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
