import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är NetEnt Live?" />
    <div className="content-header">
      <h1>Vad är NetEnt Live?</h1>
      <p>NetEnts live casinospel.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
