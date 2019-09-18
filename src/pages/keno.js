import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Keno?" />
    <div className="content-header">
      <h1>Vad är Keno?</h1>
      <p>Ett spel som liknar bingo och går ut på att välja en rad bestående av siffror och ur en bestämd mängd.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
