import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Evolution Gaming?" />
    <div className="content-header">
      <h1>Vad är Evolution Gaming?</h1>
      <p>Branschledare för live casino utveckling.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
