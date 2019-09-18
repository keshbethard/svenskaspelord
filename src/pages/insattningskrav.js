import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder insättningskrav?" />
    <div className="content-header">
      <h1>Vad betyder insättningskrav?</h1>
      <p>Ett krav på en viss summa pengar du måste sätta in för att erhålla en bonus.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
