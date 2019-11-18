import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Stödlinjen.se?" />
    <div className="content-header">
      <h1>Vad är Stödlinjen.se?</h1>
      <p><a href="https://www.stodlinjen.se/" target="_blank">Stödlinjen.se</a> är första hjälpen vid spelproblem.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
