import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder videoslots?" />
    <div className="content-header">
      <h1>Vad betydr videoslots?</h1>
      <p>Enarmad bandit med animationer och videos.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
