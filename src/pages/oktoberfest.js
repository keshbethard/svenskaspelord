import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Oktoberfest?" />
    <div className="content-header">
      <h1>Vad är Oktoberfest?</h1>
      <p>En populär <Link to="/slots/">slots</Link> från <Link to="/nolimit-city">Nolimit City</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
