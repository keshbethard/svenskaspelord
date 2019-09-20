import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är turbo spins?" />
    <div className="content-header">
      <h1>Vad är turbo spins?</h1>
      <p>En funktion som gör att hjulet i din <Link to="/spelautomat">spelautomat</Link> går fortare.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
