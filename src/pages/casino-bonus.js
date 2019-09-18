import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder casino bonus?" />
    <div className="content-header">
      <h1>Vad betyder casino bonus?</h1>
      <p>Bonus som används vid casinospel. Kan vara pengar eller gratissnurr.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
