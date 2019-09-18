import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder betting bonus?" />
    <div className="content-header">
      <h1>Vad betyder betting bonus?</h1>
      <p>Bonus som används när du bettar hos ett spelbolag med sportsbook.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
