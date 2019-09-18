import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const Word = () => (
  <Layout>
    <SEO title="Vad betyder lojalitetspoäng?" />
    <div className="content-header">
      <h1>Vad betyder lojalitetspoäng?</h1>
      <p>Poäng du samlar under tiden du spelar hos ett spelbolag med lojalitetsprogram.</p>
      <Link to="/" className="back-button">Tillbaka till startsidan</Link>
    </div>
  </Layout>
)

export default Word
