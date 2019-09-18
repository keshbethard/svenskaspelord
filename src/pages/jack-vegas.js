import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Jack Vegas?" />
    <div className="content-header">
      <h1>Vad är Jack Vegas?</h1>
      <p>Landbaserade automater som erbjuder ett 20-tal spel med olika teman.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
