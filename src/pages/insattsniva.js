import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder insattsnivå?" />
    <div className="content-header">
      <h1>Vad betyder insattsnivå?</h1>
      <p>Val av hur mycket pengar du vill spela för.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
