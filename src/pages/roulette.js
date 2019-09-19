import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Roulette?" />
    <div className="content-header">
      <h1>Vad är Roulette?</h1>
      <p>Ett <Link to="/hasardspel">hasardspel</Link> som bland annat förekommer på casinon.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
