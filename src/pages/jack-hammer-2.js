import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Jack Hammer 2?" />
    <div className="content-header">
      <h1>Vad är Jack Hammer 2?</h1>
      <p>Jack Hammer ıı är efterföljaren av NetEnts populära videoslot Jack Hammer.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
