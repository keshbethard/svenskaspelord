import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder live casino?" />
    <div className="content-header">
      <h1>Vad betyder live casino?</h1>
      <p>Casino online med riktiga dealers och andra spelare.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
