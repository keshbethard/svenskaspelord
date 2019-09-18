import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är svenska casino?" />
    <div className="content-header">
      <h1>Vad är svenska casino?</h1>
      <p>Casinon som innehar en svensk spellicens och som erbjuder svenska som språk.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
