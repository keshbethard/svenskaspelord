import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder kasino?" />
    <div className="content-header">
      <h1>Vad betyder kasino?</h1>
      <p>Svenskt ord för <Link to="/casino">casino</Link>.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
