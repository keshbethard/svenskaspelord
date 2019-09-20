import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är LeoVegas?" />
    <div className="content-header">
      <h1>Vad betyder LeoVegas?</h1>
      <p>En av de största casino och betting leverantörer i världen.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
