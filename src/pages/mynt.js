import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder mynt?" />
    <div className="content-header">
      <h1>Vad betyder mynt?</h1>
      <p>Casinovalutan dina pengar blir omvandlade till när du gör en insättning.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
