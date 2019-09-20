import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Wixx?" />
    <div className="content-header">
      <h1>Vad är Wixx?</h1>
      <p>Ett spel utvecklad av <Link to="/nolimit-city">Nolimit City</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
