import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder betting?" />
    <div className="content-header">
      <h1>Vad betyder betting?</h1>
      <p>När man försöker förutspå ett matchresultat och gör en satsning.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
