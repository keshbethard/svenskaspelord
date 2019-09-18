import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder lojalitetsbonus?" />
    <div className="content-header">
      <h1>Vad betyder lojalitetsbonus?</h1>
      <p>Bonus du erhåller när du uppfyllt antalet poäng i ett lojalitetsprogram.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
