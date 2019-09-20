import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är virtuell sport?" />
    <div className="content-header">
      <h1>Vad är virtuell sport?</h1>
      <p>Sport som där resultat simuleras av datorn.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
