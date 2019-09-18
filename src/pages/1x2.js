import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder 1x2?" />
    <div className="content-header">
      <h1>Vad betyder 1x2?</h1>
      <p>Den vanligaste oddsformen vi har i Sverige. Du satsar på hemmalag, bortalag eller oavgjort.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
