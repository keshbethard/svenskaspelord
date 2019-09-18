import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder matchningsbonus?" />
    <div className="content-header">
      <h1>Vad betyder matchningsbonus?</h1>
      <p>Bonus som matchas med din insättning med en viss procent.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
