import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är PlayTech?" />
    <div className="content-header">
      <h1>Vad är PlayTech?</h1>
      <p>En av de tre största online casino spelutvecklare idag.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
