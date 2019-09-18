import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad är Svenska Spel?" />
    <div className="content-header">
      <h1>Vad är Svenska Spel?</h1>
      <p>Ett statlig bolag som verkar inom den reglerade spelmarknaden i Sverige.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
