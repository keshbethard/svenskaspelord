import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder walking wild?" />
    <div className="content-header">
      <h1>Vad betyder walking wild?</h1>
      <p>Wild som ger dig fler chanser att vinna.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
